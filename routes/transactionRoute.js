import express from "express";
import {
  getTransactions,
  addTransaction,
  getTransactionByCode,
  getTransactionByFromToUserId,
  updateTransactionStatus,
  updateTransactionPaymentStatus,
} from "../controllers/transactionController.js";
// import { validateTokenMiddleware } from "../config/app.js";
import validateTokenMiddleware from "../middleware/validateToken.js";

const router = express.Router();

router.use(validateTokenMiddleware);

router.get("/", getTransactions);
router.post("/", addTransaction);
router.post("/update-status", updateTransactionStatus);
router.post("/update-payment-status", updateTransactionPaymentStatus);
router.get("/code/:transactionCode", getTransactionByCode);
router.get("/fromToUserId/:fromToUserId", getTransactionByFromToUserId);

export default router;
