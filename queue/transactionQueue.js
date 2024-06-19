import Queue from "bull";
import {
  addTransaction,
  updateTransactionStatus,
  updateTransactionPaymentStatus,
  updateTransactionPaymentProof,
} from "../services/transactionService.js";
import dotenv from "dotenv";
import { consoleForDevelop } from "../config/app.js";

dotenv.config();

const transactionQueue = new Queue("transactions");
const transactionStatusQueue = new Queue("transactionStatus");
const transactionPaymentStatusQueue = new Queue("transactionPaymentStatus");
const transactionProofQueue = new Queue("transactionProof");

transactionQueue.process(5, async (job) => {
  const { data } = job;
  await addTransaction(data);
});

transactionStatusQueue.process(5, async (job) => {
  const { data } = job;
  await updateTransactionStatus(data);
});

transactionPaymentStatusQueue.process(5, async (job) => {
  const { data } = job;
  await updateTransactionPaymentStatus(data);
});

transactionProofQueue.process(5, async (job) => {
  const { data } = job;
  await updateTransactionPaymentProof(data);
});

transactionQueue.on("failed", (job, err) => {
  console.error(`Job failed with error ${err.message}`);
});

transactionStatusQueue.on("failed", (job, err) => {
  console.error(`Job failed with error ${err.message}`);
});

transactionPaymentStatusQueue.on("failed", (job, err) => {
  console.error(`Job failed with error ${err.message}`);
});

transactionProofQueue.on("failed", (job, err) => {
  console.error(`Job failed with error ${err.message}`);
});

export const addTransactionToQueue = (data) => {
  consoleForDevelop("Add Transaction Process [Queue]");
  transactionQueue.add(data, { attempts: 3, backoff: 5000, priority: 1 });
};

export const updateTransactionStatusToQueue = (data) => {
  consoleForDevelop("Update Transaction Status Process [Queue]");
  transactionStatusQueue.add(data, { attempts: 3, backoff: 5000, priority: 1 });
};

export const updateTransactionPaymentStatusToQueue = (data) => {
  consoleForDevelop("Update Transaction Payment Status Process [Queue]");
  transactionPaymentStatusQueue.add(data, {
    attempts: 3,
    backoff: 5000,
    priority: 1,
  });
};

export const updateTransactionProofToQueue = (data) => {
  consoleForDevelop("Upload Payment Proof Process [Queue]");
  transactionProofQueue.add(data, { attempts: 3, backoff: 5000, priority: 1 });
};
