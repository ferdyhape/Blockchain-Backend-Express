import Queue from "bull";
import { addTransactionDetail } from "../services/transactionDetailService.js";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";

dotenv.config();

// using KV Redis from Vercel
// const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });

// const TransactionDetailQueue = new Queue("transactionsDetail", {
//   redis,
// });

// using local Redis
const TransactionDetailQueue = new Queue("transactionDetail");

// Define the process handler to handle incoming jobs
TransactionDetailQueue.process(async (job) => {
  const { data } = job;
  // console.log("Processing transaction detail...", data);
  await addTransactionDetail(data);
});

export const addTransactionDetailToQueue = (data) => {
  TransactionDetailQueue.add(data);
  // console.log("Transaction detail added to queue...");
};
