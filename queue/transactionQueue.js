import Queue from "bull";
import { addTransaction } from "../services/transactionService.js";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";

dotenv.config();

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const transactionQueue = new Queue("transactions", {
  redis,
});

// using local Redis
// const transactionQueue = new Queue("transactions");

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
