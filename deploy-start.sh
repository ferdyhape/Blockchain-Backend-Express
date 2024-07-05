#!/bin/bash

# Function to clean up background processes
cleanup() {
    echo -e "\e[31mStopping npm process\e[0m"
    pkill -f 'npm start'
    exit 0
}

# Set trap to catch SIGINT and SIGTERM
trap cleanup SIGINT SIGTERM

# Define the build folder path
BUILD_FOLDER="smart_contracts/build"

# Remove the build folder if it exists
if [ -d "$BUILD_FOLDER" ]; then
    echo "Removing $BUILD_FOLDER..."
    rm -rf "$BUILD_FOLDER"
    echo -e "Build folder removed."
fi

# new line
echo ""

# Kill any process using port 5000
PORT=5000
if lsof -i:$PORT -t >/dev/null 2>&1; then
    echo "Port $PORT is in use. Stopping process..."
    kill -9 $(lsof -i:$PORT -t)
fi

# Start the npm process
echo "Starting npm process..."
if npm start > log_script/npm_output.log 2>&1 & then
    NPM_PID=$!
    echo -e "\e[32mNPM process started\e[0m"
else
    echo -e "\e[31mFailed to start NPM process\e[0m"
    cleanup
fi

# Function to show animation
show_animation() {
    local delay=0.1
    local spinstr='|/-\'
    while :; do
        for i in $(seq 0 3); do
            echo -ne "${spinstr:$i:1}" "\r"
            sleep $delay
        done
    done
}

echo ""

# Wait for npm process to output specific lines
echo "Waiting for smart contracts to be deployed..."
show_animation &
ANIMATION_PID=$!

while ! (grep -q "TransactionContract deployed successfully at address:" log_script/npm_output.log && grep -q "TokenContract deployed successfully at address:" log_script/npm_output.log); do
    sleep 1
done

kill $ANIMATION_PID
wait $ANIMATION_PID 2>/dev/null

# Extract contract addresses from the log
TRANSACTION_CONTRACT_ADDRESS=$(grep -oP 'TransactionContract deployed successfully at address: \K(0x[0-9a-fA-F]+)' log_script/npm_output.log)
TOKEN_CONTRACT_ADDRESS=$(grep -oP 'TokenContract deployed successfully at address: \K(0x[0-9a-fA-F]+)' log_script/npm_output.log)

# Get current timestamp
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

# Define green color for text
GREEN='\e[32m'
NC='\e[0m' # No Color

# Log deployment details
LOG_FILE="log_script/deploy.log"
echo "----------------------------------------" | tee -a $LOG_FILE
echo -e "${GREEN}## DEPLOYMENT DETAILS ## ${NC}"
# ${GREEN}Deployment Details${NC}"
echo "Deployment Details" >> $LOG_FILE
echo -e "${GREEN}TransactionContract deployed at: $TRANSACTION_CONTRACT_ADDRESS${NC}"
echo "TransactionContract deployed at: $TRANSACTION_CONTRACT_ADDRESS" >> $LOG_FILE
echo -e "${GREEN}TokenContract deployed at: $TOKEN_CONTRACT_ADDRESS${NC}"
echo "TokenContract deployed at: $TOKEN_CONTRACT_ADDRESS" >> $LOG_FILE
echo -e "${GREEN}Deployment timestamp: $TIMESTAMP${NC}"
echo "Deployment timestamp: $TIMESTAMP" >> $LOG_FILE
echo "----------------------------------------" | tee -a $LOG_FILE

# Stop the npm start process
echo -e "\e[31mStopping npm process\e[0m"
lsof -i:$PORT -t | xargs kill -9

echo ""

# Update .env file from env.txt and add new contract addresses
ENV_FILE=".env"
cp .env.backup $ENV_FILE
echo "Updating $ENV_FILE..."
sed -i "s/^CONTRACT_ADDRESS_TRANSACTION = .*/CONTRACT_ADDRESS_TRANSACTION = \"$TRANSACTION_CONTRACT_ADDRESS\"/g" $ENV_FILE
sed -i "s/^CONTRACT_ADDRESS_TOKEN = .*/CONTRACT_ADDRESS_TOKEN = \"$TOKEN_CONTRACT_ADDRESS\"/g" $ENV_FILE
echo -e "${GREEN}$ENV_FILE updated${NC}"

echo ""

# Start the npm run dev process
echo -e "${GREEN}STARTING NPM RUN DEV PROCESS...${NC}"
show_animation &
ANIMATION_PID=$!

if npm run dev; then
    kill $ANIMATION_PID
    wait $ANIMATION_PID 2>/dev/null
    NPM_PID=$!
    echo -e "\e[32mNPM process started\e[0m"
else
    kill $ANIMATION_PID
    wait $ANIMATION_PID 2>/dev/null
    echo -e "\e[31mFailed to start NPM process\e[0m"
    cleanup
fi

# Wait for background processes to finish
wait
