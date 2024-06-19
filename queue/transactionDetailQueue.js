import Queue from "bull";
import { addTransactionDetail } from "../services/transactionDetailService.js";
import dotenv from "dotenv";
import { consoleForDevelop } from "../config/app.js";

dotenv.config();

const TransactionDetailQueue = new Queue("transactionDetail");

TransactionDetailQueue.process(5, async (job) => {
  const { data } = job;
  await addTransactionDetail(data);
});

TransactionDetailQueue.on("failed", (job, err) => {
  console.error(`Job failed with error ${err.message}`);
});

export const addTransactionDetailToQueue = (data) => {
  consoleForDevelop("Add Transaction Detail Process [Queue]");
  TransactionDetailQueue.add(data, {
    attempts: 3,
    backoff: 5000,
    priority: 10,
  });
};
