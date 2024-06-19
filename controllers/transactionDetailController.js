import {
  // getAllTransactionDetail as getAllTransactionDetailService,
  addTransactionDetail as addTransactionDetailService,
  getPriceFromTransactionDetailByTransactionCode as getPriceFromTransactionDetailByTransactionCodeService,
  getCountTransactionDetailByTransactionCode as getCountTransactionDetailByTransactionCodeService,
  getTransactionDetailByTransactionCode as getTransactionDetailByTransactionCodeService,
} from "../services/transactionDetailService.js";
import { validationResult } from "express-validator";
import { validateAddTransactionDetail } from "../requests/transactionDetailRequest.js";
import { addTransactionDetailToQueue } from "../queue/transactionDetailQueue.js";
import { consoleForDevelop } from "../config/app.js";

// export const getTransactionDetails = async (req, res) => {
//   consoleForDevelop("Get Transaction Details Process [Controller]", "header");
//   try {
//     const transactionDetails = await getAllTransactionDetailService();
//     return res.status(200).json({
//       message: "Transaction details fetched successfully",
//       data: transactionDetails,
//     });
//   } catch (error) {
//     console.error("Error fetching transaction details from contract:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

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
        message: "Transaction detail add in progress...",
      });
    });
  } catch (error) {
    console.error("Error adding transaction detail:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPriceFromTransactionDetailByTransactionCode = async (
  req,
  res
) => {
  consoleForDevelop(
    "Get Price From Transaction Detail Process [Controller]",
    "header"
  );
  try {
    const price = await getPriceFromTransactionDetailByTransactionCodeService(
      req.params.transactionCode
    );
    return res.status(200).json({
      message: "Price fetched successfully",
      data: price,
    });
  } catch (error) {
    console.error("Error fetching price from transaction detail:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCountTransactionDetailByTransactionCode = async (req, res) => {
  consoleForDevelop(
    "Get Count Transaction Detail By Transaction Code Process [Controller]",
    "header"
  );
  try {
    const count = await getCountTransactionDetailByTransactionCodeService(
      req.params.transactionCode
    );
    return res.status(200).json({
      message: "Transaction detail count fetched successfully",
      data: count,
    });
  } catch (error) {
    console.error(
      "Error fetching transaction detail count by transaction code:",
      error
    );
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTransactionDetailByTransactionCode = async (req, res) => {
  consoleForDevelop(
    "Get Transaction Detail By Transaction Code Process [Controller]",
    "header"
  );
  try {
    const transactionDetails =
      await getTransactionDetailByTransactionCodeService(
        req.params.transactionCode
      );
    if (transactionDetails.length === 0) {
      return res.status(404).json({ error: "Transaction detail not found" });
    }
    return res.status(200).json({
      message: "Transaction detail fetched successfully",
      data: transactionDetails,
    });
  } catch (error) {
    console.error(
      "Error fetching transaction detail by transaction code:",
      error
    );
    res.status(500).json({ error: "Internal server error" });
  }
};
