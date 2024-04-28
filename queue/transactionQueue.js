import Queue from "bull";
import { addTransaction } from "../services/transactionService.js";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { consoleForDevelop } from "../config/app.js";

dotenv.config();

// const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });

// const transactionQueue = new Queue("transactions", {
//   redis,
// });

// using local Redis
const transactionQueue = new Queue("transactions");

// Define the process handler to handle incoming jobs
transactionQueue.process(async (job) => {
  const { data } = job;
  await addTransaction(data);
});

export const addTransactionToQueue = (data) => {
  consoleForDevelop("Add Transaction Process [Queue]");
  transactionQueue.add(data);
};
