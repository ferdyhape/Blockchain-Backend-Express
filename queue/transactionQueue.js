import Queue from "bull";
import {
  addTransaction,
  updateTransactionStatus,
  updateTransactionPaymentStatus,
} from "../services/transactionService.js";
import dotenv from "dotenv";
// import { Redis } from "@upstash/redis";
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
const transactionStatusQueue = new Queue("transactionStatus");
const transactionPaymentStatusQueue = new Queue("transactionPaymentStatus");

// Define the process handler to handle incoming jobs
transactionQueue.process(async (job) => {
  const { data } = job;
  await addTransaction(data);
});

transactionStatusQueue.process(async (job) => {
  const { data } = job;
  await updateTransactionStatus(data);
});

transactionPaymentStatusQueue.process(async (job) => {
  const { data } = job;
  await updateTransactionPaymentStatus(data);
});

export const addTransactionToQueue = (data) => {
  consoleForDevelop("Add Transaction Process [Queue]");
  transactionQueue.add(data);
};

export const updateTransactionStatusToQueue = (data) => {
  consoleForDevelop("Update Tranasction Status Process [Queue]");
  transactionStatusQueue.add(data);
};

export const updateTransactionPaymentStatusToQueue = (data) => {
  consoleForDevelop("Update Tranasction Payment Status Process [Queue]");
  transactionPaymentStatusQueue.add(data);
};
