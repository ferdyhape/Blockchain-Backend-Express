import {
  getAllTransactionDetail as getAllTransactionDetailService,
  addTransactionDetail as addTransactionDetailService,
} from "../services/transactionDetailService.js";
import { validationResult } from "express-validator";
import { validateAddTransactionDetail } from "../requests/transactionDetailRequest.js";

// init transaction detail queue
import { addTransactionDetailToQueue } from "../queue/transactionDetailQueue.js";

export const getTransactionDetails = async (req, res) => {
  try {
    const transactionDetails = await getAllTransactionDetailService();
    return res.status(200).json({
      message: "Transaction details fetched successfully",
      data: transactionDetails,
    });
  } catch (error) {
    console.error("Error fetching transaction details from contract:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addTransactionDetail = async (req, res) => {
  await Promise.all(
    validateAddTransactionDetail.map((validator) => validator.run(req))
  );
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // validate end

  try {
    addTransactionDetailToQueue(req.body);
    return res.status(200).json({
      message: "Transaction detail add on progress...",
    });
  } catch (error) {
    console.error("Error adding transaction detail:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
