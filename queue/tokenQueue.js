import Queue from "bull";
import {
  addToken,
  changeStatusByTransactionCode,
  deleteTokenByTransactionCode,
  deleteTokenByCampaignIdAndSoldTo,
} from "../services/tokenService.js";
import dotenv from "dotenv";
import { consoleForDevelop } from "../config/app.js";

dotenv.config();

const TokenQueue = new Queue("addtoken");

TokenQueue.process(5, async (job) => {
  const { data } = job;
  await addToken(data);
});

TokenQueue.on("failed", (job, err) => {
  console.error(`Job failed with error ${err.message}`);
});

export const addTokenToQueue = (data) => {
  consoleForDevelop("Add Token Process [Queue]");
  TokenQueue.add(data, {
    attempts: 10,
    backoff: 5000,
  });
};

const TokenChangeStatusQueue = new Queue("tokenChangeStatusByTransactionCode");

TokenChangeStatusQueue.process(5, async (job) => {
  const { data } = job;
  // console.log("datanya pada queue adalah ", data);
  await changeStatusByTransactionCode(data);
});

TokenChangeStatusQueue.on("failed", (job, err) => {
  console.error(`Job failed with error ${err.message}`);
});

export const changeStatusByTransactionCodeToQueue = (data) => {
  consoleForDevelop("Change Status By Transaction Code Process [Queue]");
  TokenChangeStatusQueue.add(data, {
    attempts: 10,
    backoff: 5000,
  });
};

const TokenDeleteQueue = new Queue("tokenDeleteByTransactionCode");

TokenDeleteQueue.process(5, async (job) => {
  const { data } = job;
  await deleteTokenByTransactionCode(data);
});

TokenDeleteQueue.on("failed", (job, err) => {
  console.error(`Job failed with error ${err.message}`);
});

export const deleteTokenByTransactionCodeToQueue = (data) => {
  consoleForDevelop("Delete Token By Transaction Code Process [Queue]");
  TokenDeleteQueue.add(data, {
    attempts: 10,
    backoff: 5000,
  });
};

// deleteTokenByCampaignIdAndSoldTo;

// make for deleteTokenByCampaignIdAndSoldTo
const TokenDeleteByCampaignIdQueue = new Queue("tokenDeleteByCampaignId");

TokenDeleteByCampaignIdQueue.process(5, async (job) => {
  const { data } = job;
  await deleteTokenByCampaignIdAndSoldTo(data);
});

TokenDeleteByCampaignIdQueue.on("failed", (job, err) => {
  console.error(`Job failed with error ${err.message}`);
});

export const deleteTokenByCampaignIdAndSoldToToQueue = (data) => {
  consoleForDevelop("Delete Token By Campaign Id Process [Queue]");
  TokenDeleteByCampaignIdQueue.add(data, {
    attempts: 10,
    backoff: 5000,
  });
};
