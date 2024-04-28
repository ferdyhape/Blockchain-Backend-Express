import {
  getAllTransactionDetail as getAllTransactionDetailService,
  addTransactionDetail as addTransactionDetailService,
} from "../services/transactionDetailService.js";
import { validationResult } from "express-validator";
import { validateAddTransactionDetail } from "../requests/transactionDetailRequest.js";
import { addTransactionDetailToQueue } from "../queue/transactionDetailQueue.js";
import { consoleForDevelop } from "../config/app.js";

export const getTransactionDetails = async (req, res) => {
  consoleForDevelop("Get Transaction Details Process [Controller]", "header");
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
  consoleForDevelop("Add Transaction Detail Process [Controller]", "header");
  try {
    consoleForDevelop("Validating transaction detail data [Controller]");
    Promise.all(
      validateAddTransactionDetail.map((validator) => validator.run(req))
    ).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      addTransactionDetailToQueue(req.body);
      return res.status(200).json({
        message: "Transaction detail add on progress...",
      });
    });
  } catch (error) {
    console.error("Error adding transaction detail:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
