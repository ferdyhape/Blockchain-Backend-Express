import { validationResult } from "express-validator";

// service
import {
  getAllTransaction as getAllTransactionService,
  getTranasctionByCode as getTranasctionByCodeService,
  getTransactionByFromToUserId as getTransactionByFromToUserIdService,
  getTransactionByCampaignId as getTransactionByCampaignIdService,
  getCountTransaction as getCountTransactionService,
} from "../services/transactionService.js";

// request validation
import {
  validateAddTransaction,
  validateUpdateTransactionStatus,
  validateUpdateTransactionPaymentStatus,
  validateUploadTransactionPaymentProof,
} from "../requests/transactionRequest.js";

// queue
import {
  addTransactionToQueue,
  updateTransactionStatusToQueue,
  updateTransactionPaymentStatusToQueue,
  updateTransactionProofToQueue,
} from "../queue/transactionQueue.js";
import { consoleForDevelop } from "../config/app.js";

// GET
export const getTransactions = async (req, res) => {
  consoleForDevelop("Get Transactions Process [Controller]", "header");
  try {
    const transactions = await getAllTransactionService();
    if (transactions.length === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    return res.status(200).json({
      message: "Transactions fetched successfully",
      data: transactions,
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTransactionByCampaignId = async (req, res) => {
  consoleForDevelop(
    "Get Transaction by CampaignId Process [Controller]",
    "header"
  );
  try {
    const transactions = await getTransactionByCampaignIdService(
      req.params.campaignId
    );
    if (transactions.length === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    return res.status(200).json({
      message: "Transactions fetched successfully",
      data: transactions,
    });
  } catch (error) {
    console.error("Error fetching transaction by campaignId:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTransactionByCode = async (req, res) => {
  consoleForDevelop("Get Transaction by Code Process [Controller]", "header");
  try {
    const transaction = await getTranasctionByCodeService(
      req.params.transactionCode
    );
    if (transaction.length === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    return res.status(200).json({
      message: "Transaction fetched successfully",
      data: transaction,
    });
  } catch (error) {
    console.error("Error fetching transaction by code:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTransactionByFromToUserId = async (req, res) => {
  consoleForDevelop(
    "Get Transaction by FromToUserId Process [Controller]",
    "header"
  );
  try {
    const transactions = await getTransactionByFromToUserIdService(
      req.params.fromToUserId
    );
    if (transactions.length === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    return res.status(200).json({
      message: "Transactions fetched successfully",
      data: transactions,
    });
  } catch (error) {
    console.error("Error fetching transaction by fromToUserId:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCountTransaction = async (req, res) => {
  consoleForDevelop("Get Count Transaction Process [Controller]", "header");
  try {
    const count = await getCountTransactionService();
    return res.status(200).json({
      message: "Transaction count fetched successfully",
      data: count,
    });
  } catch (error) {
    console.error("Error fetching transaction count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// POST
export const addTransaction = async (req, res) => {
  consoleForDevelop("Add Transaction Process [Controller]", "header");
  try {
    consoleForDevelop("Validating transaction data [Controller]");
    Promise.all(
      validateAddTransaction.map((validator) => validator.run(req))
    ).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      addTransactionToQueue(req.body);
      return res.status(200).json({
        message: "Transaction add in progress...",
      });
    });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTransactionStatus = async (req, res) => {
  consoleForDevelop("Update Transaction Status Process [Controller]", "header");
  try {
    consoleForDevelop("Validating transaction data [Controller]");
    Promise.all(
      validateUpdateTransactionStatus.map((validator) => validator.run(req))
    ).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      updateTransactionStatusToQueue(req.body);
      return res.status(200).json({
        message: "Transaction status update in progress...",
      });
    });
  } catch (error) {
    console.error("Error updating transaction status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTransactionPaymentStatus = async (req, res) => {
  consoleForDevelop(
    "Update Transaction Payment Status Process [Controller]",
    "header"
  );
  try {
    consoleForDevelop("Validating transaction data [Controller]");
    Promise.all(
      validateUpdateTransactionPaymentStatus.map((validator) =>
        validator.run(req)
      )
    ).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      updateTransactionPaymentStatusToQueue(req.body);
      return res.status(200).json({
        message: "Transaction payment status update in progress...",
      });
    });
  } catch (error) {
    console.error("Error updating transaction payment status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const uploadTransactionPaymentProof = async (req, res) => {
  consoleForDevelop("Upload Payment Proof Process [Controller]", "header");
  try {
    consoleForDevelop("Validating transaction data [Controller]");
    Promise.all(
      validateUploadTransactionPaymentProof.map((validator) =>
        validator.run(req)
      )
    ).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      updateTransactionProofToQueue(req.body);
      return res.status(200).json({
        message: "Transaction payment proof upload in progress...",
      });
    });
  } catch (error) {
    console.error("Error uploading payment proof:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
