import Queue from "bull";
import { addTransactionDetail } from "../services/transactionDetailService.js";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { consoleForDevelop } from "../config/app.js";

dotenv.config();

// using local Redis
const TransactionDetailQueue = new Queue("transactionDetail");

// Define the process handler to handle incoming jobs
TransactionDetailQueue.process(async (job) => {
  const { data } = job;
  await addTransactionDetail(data);
});

export const addTransactionDetailToQueue = (data) => {
  consoleForDevelop("Add Transaction Detail Process [Queue]");
  TransactionDetailQueue.add(data);
};
