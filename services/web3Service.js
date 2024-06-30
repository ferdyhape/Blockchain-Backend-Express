import fs from "fs";
import path from "path";
import Web3 from "web3";
import solc from "solc";
import chalk from "chalk";

import {
  CONTRACT_ADDRESS_TRANSACTION,
  CONTRACT_ADDRESS_TRANSACTION_DETAIL,
  PRIVATE_KEY,
  API_URL,
  WALLET_ADDRESS,
} from "../config/smartContractConfig.js";
import { consoleForDevelop } from "../config/app.js";

const web3 = new Web3(API_URL);

// code for deploy
const __dirname = path.resolve();
const buildPath = path.resolve(__dirname, "smart_contracts", "build");

export const compileContracts = async () => {
  try {
    const __dirname = path.resolve();
    const buildPath = path.resolve(__dirname, "smart_contracts", "build");

    // Check if build folder exists
    if (!fs.existsSync(buildPath)) {
      fs.mkdirSync(buildPath);
    }

    // Compile transactionContract.sol if ABI and bytecode files do not exist
    const transactionContractABIPath = path.resolve(
      buildPath,
      "TransactionContractABI.json"
    );
    const transactionContractBytecodePath = path.resolve(
      buildPath,
      "TransactionContractBytecode.txt"
    );

    if (
      !fs.existsSync(transactionContractABIPath) ||
      !fs.existsSync(transactionContractBytecodePath)
    ) {
      const contractPath1 = path.resolve(
        __dirname,
        "smart_contracts",
        "transactionContract.sol"
      );
      const source1 = fs.readFileSync(contractPath1, "utf8");

      const input1 = {
        language: "Solidity",
        sources: {
          "transactionContract.sol": {
            content: source1,
          },
        },
        settings: {
          outputSelection: {
            "*": {
              "*": ["abi", "evm.bytecode"],
            },
          },
        },
      };

      const output1 = JSON.parse(solc.compile(JSON.stringify(input1)));

      // console.log(
      //   "Compilation Output for transactionContract:",
      //   JSON.stringify(output1, null, 2)
      // );

      if (output1.errors) {
        output1.errors.forEach((err) => {
          console.error(err.formattedMessage);
        });
        throw new Error("Compilation failed for transactionContract");
      }

      const contract1 =
        output1.contracts["transactionContract.sol"].TransactionContract;

      // Write ABI to file for transactionContract
      fs.writeFileSync(
        transactionContractABIPath,
        JSON.stringify(contract1.abi, null, 2)
      );

      // Write bytecode to file for transactionContract
      fs.writeFileSync(
        transactionContractBytecodePath,
        contract1.evm.bytecode.object
      );

      console.log(
        chalk.green(
          "ABI and bytecode for transactionContract successfully saved in the build folder inside smart_contracts."
        )
      );
    } else {
      console.log(
        "TransactionContract ABI and bytecode files already exist. Skipping compilation."
      );
    }

    // Compile transactionDetailContract.sol if ABI and bytecode files do not exist
    const transactionDetailContractABIPath = path.resolve(
      buildPath,
      "TransactionDetailContractABI.json"
    );
    const transactionDetailContractBytecodePath = path.resolve(
      buildPath,
      "TransactionDetailContractBytecode.txt"
    );

    if (
      !fs.existsSync(transactionDetailContractABIPath) ||
      !fs.existsSync(transactionDetailContractBytecodePath)
    ) {
      const contractPath2 = path.resolve(
        __dirname,
        "smart_contracts",
        "transactionDetailContract.sol"
      );
      const source2 = fs.readFileSync(contractPath2, "utf8");

      const input2 = {
        language: "Solidity",
        sources: {
          "transactionDetailContract.sol": {
            content: source2,
          },
        },
        settings: {
          outputSelection: {
            "*": {
              "*": ["abi", "evm.bytecode"],
            },
          },
        },
      };

      const output2 = JSON.parse(solc.compile(JSON.stringify(input2)));

      // console.log(
      //   "Compilation Output for transactionDetailContract:",
      //   JSON.stringify(output2, null, 2)
      // );

      if (output2.errors) {
        output2.errors.forEach((err) => {
          console.error(err.formattedMessage);
        });
        throw new Error("Compilation failed for transactionDetailContract");
      }

      const contract2 =
        output2.contracts["transactionDetailContract.sol"]
          .TransactionDetailContract;

      // Write ABI to file for transactionDetailContract
      fs.writeFileSync(
        transactionDetailContractABIPath,
        JSON.stringify(contract2.abi, null, 2)
      );

      // Write bytecode to file for transactionDetailContract
      fs.writeFileSync(
        transactionDetailContractBytecodePath,
        contract2.evm.bytecode.object
      );

      console.log(
        chalk.green(
          "ABI and bytecode for transactionDetailContract successfully saved in the build folder inside smart_contracts."
        )
      );
    } else {
      console.log(
        "TransactionDetailContract ABI and bytecode files already exist. Skipping compilation."
      );
    }
  } catch (error) {
    console.error("Error compiling contracts:", error);
  }
};

const getBytecode = (contractName) => {
  const bytecodePath = path.resolve(
    __dirname,
    "smart_contracts",
    "build",
    `${contractName}Bytecode.txt`
  );
  // console.log("Bytecode path:", bytecodePath);
  const bytecode = "0x" + fs.readFileSync(bytecodePath, "utf8").trim();
  return bytecode;
};

export const deploySmartContract = async (contractName) => {
  consoleForDevelop(
    `Deploy Smart Contract Process [Web3 Service] - ${contractName}`
  );
  try {
    const bytecode = getBytecode(contractName);

    const gas = await web3.eth.estimateGas({ data: bytecode });
    const gasPrice = await web3.eth.getGasPrice();

    const newContractInstance = await web3.eth.sendTransaction({
      data: bytecode,
      gas: gas,
      gasPrice: gasPrice,
      from: WALLET_ADDRESS,
    });

    return newContractInstance.contractAddress;
  } catch (error) {
    console.error(`Error deploying smart contract ${contractName}:`, error);
    throw error;
  }
};
// end code for deploy

const validateUseFor = (useFor) => {
  let abiPath;
  if (useFor === "transaction") {
    abiPath = path.resolve(buildPath, "TransactionContractABI.json");
    return [JSON.parse(fs.readFileSync(abiPath)), CONTRACT_ADDRESS_TRANSACTION];
  }
  if (useFor === "transactionDetail") {
    abiPath = path.resolve(buildPath, "TransactionDetailContractABI.json");
    return [
      JSON.parse(fs.readFileSync(abiPath)),
      CONTRACT_ADDRESS_TRANSACTION_DETAIL,
    ];
  }
  throw new Error("Invalid useFor value");
};

export const createContractInstance = async (useFor) => {
  consoleForDevelop("Create Contract Instance Process [Web3 Service]");
  const [abiUsed, contractAddressUsed] = validateUseFor(useFor);
  const contract = new web3.eth.Contract(abiUsed, contractAddressUsed);
  return contract;
};

export const sendRawTx = async (arrayParams, method, useFor) => {
  consoleForDevelop("Send Raw Transaction Process [SendRawTx Web3 Service]");
  try {
    const [abiUsed, contractAddressUsed] = validateUseFor(useFor);
    const nonce = await web3.eth.getTransactionCount(WALLET_ADDRESS);
    let gasPrice = await web3.eth.getGasPrice();
    if (useFor === "transactionDetail") {
      gasPrice = gasPrice.toString() * 2;
    }
    const gasLimit = 3000000;
    const contract = new web3.eth.Contract(abiUsed, contractAddressUsed);
    const data = contract.methods[method](...arrayParams).encodeABI();

    const rawTx = {
      nonce: web3.utils.toHex(nonce),
      gasPrice: web3.utils.toHex(gasPrice),
      gasLimit: web3.utils.toHex(gasLimit),
      to: contractAddressUsed,
      value: "0x00",
      data: data,
    };

    const signedTx = await web3.eth.accounts.signTransaction(
      rawTx,
      PRIVATE_KEY
    );

    const sentTx = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    return sentTx;
  } catch (error) {
    console.error("Error sending raw transaction:", error);
    throw error;
  }
};

// get all transaction with event TransactionAdded
export const getAllTransactionInSmartContract = async (useFor, event) => {
  const contract = await createContractInstance(useFor);
  const events = await contract.getPastEvents(event, {
    fromBlock: 0,
    toBlock: "latest",
  });

  const response = events.map((event) => {
    const returnValues = event.returnValues;
    return {
      transaction: {
        code: returnValues.transactionCode,
        campaignId: returnValues.campaignId.toString(),
        fromToUserId: returnValues.fromToUserId.toString(),
        orderType: returnValues.orderType,
        paymentStatus: returnValues.paymentStatus,
        status: returnValues.status,
        quantity: returnValues.quantity.toString(),
        totalPrice: returnValues.totalPrice.toString(),
      },
      blockNumber: event.blockNumber.toString(),
      transactionHash: event.transactionHash,
      address: event.address,
      blockHash: event.blockHash,
    };
  });

  return response;
};
