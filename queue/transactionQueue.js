import Queue from "bull";
import { addTransaction } from "../services/transactionService.js";
import dotenv from "dotenv";

dotenv.config();

// Initialize the queue outside of any function
const transactionQueue = new Queue("transactions", process.env.KV_REDIS_VERCEL);

// Define the process handler to handle incoming jobs
transactionQueue.process(async (job) => {
  const { data } = job;
  console.log("Processing transaction...", data);
  await addTransaction(data);
});

export const addTransactionToQueue = (data) => {
  transactionQueue.add(data);
  console.log("Transaction added to queue...");
};
