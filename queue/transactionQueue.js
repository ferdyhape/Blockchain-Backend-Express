import Queue from "bull";
import { addTransaction } from "../services/transactionService.js";

// Initialize the queue outside of any function
const transactionQueue = new Queue("transactions");

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
