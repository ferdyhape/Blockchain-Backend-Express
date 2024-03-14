import {
  getAllTransaction as getAllTransactionService,
  addTransaction as addTransactionService,
} from "../services/transactionService.js";
import { validationResult } from "express-validator";
import { validateAddTransaction } from "../requests/transactionRequest.js";

// init transaction queue
import { addTransactionToQueue } from "../queue/transactionQueue.js";

export const getTransactions = async (req, res) => {
  try {
    // Call the service function
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
  // validate start
  await Promise.all(
    validateAddTransaction.map((validator) => validator.run(req))
  );
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // validate end
  try {
    addTransactionToQueue(req.body);
    return res.status(200).json({
      message: "Transaction add on progress...",
    });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
