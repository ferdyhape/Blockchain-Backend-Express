import {
  getAllTransaction as getAllTransactionService,
  addTransaction as addTransactionService,
} from "../services/transactionService.js";
import { validationResult } from "express-validator";
import { validateAddTransaction } from "../requests/transactionRequest.js";
import { addTransactionToQueue } from "../queue/transactionQueue.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await getAllTransactionService();
    return res.status(200).json({
      message: "Transactions fetched successfully",
      data: transactions,
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addTransaction = async (req, res) => {
  try {
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
