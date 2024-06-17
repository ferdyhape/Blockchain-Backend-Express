import Queue from "bull";
import {
  addTransaction,
  updateTransactionStatus,
  updateTransactionPaymentStatus,
  updateTransactionPaymentProof,
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
const transactionProofQueue = new Queue("transactionProof");

// Define the process handler to handle incoming jobs

// add transaction
transactionQueue.process(async (job) => {
  const { data } = job;
  await addTransaction(data);
});

// update transaction status
transactionStatusQueue.process(async (job) => {
  const { data } = job;
  await updateTransactionStatus(data);
});

// update transaction payment status
transactionPaymentStatusQueue.process(async (job) => {
  const { data } = job;
  await updateTransactionPaymentStatus(data);
});

// update transaction payment proof
transactionProofQueue.process(async (job) => {
  const { data } = job;
  await updateTransactionPaymentProof(data);
});

// Add transaction to queue
export const addTransactionToQueue = (data) => {
  consoleForDevelop("Add Transaction Process [Queue]");
  transactionQueue.add(data);
};

// Update transaction status to queue
export const updateTransactionStatusToQueue = (data) => {
  consoleForDevelop("Update Tranasction Status Process [Queue]");
  transactionStatusQueue.add(data);
};

// Update transaction payment status to queue
export const updateTransactionPaymentStatusToQueue = (data) => {
  consoleForDevelop("Update Tranasction Payment Status Process [Queue]");
  transactionPaymentStatusQueue.add(data);
};

// Update transaction payment proof to queue
export const updateTransactionProofToQueue = (data) => {
  consoleForDevelop("Upload Payment Proof Process [Queue]");
  transactionProofQueue.add(data);
};
