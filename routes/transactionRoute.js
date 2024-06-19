import express from "express";
import {
  getTransactions,
  getCountTransaction,
  addTransaction,
  getTransactionByCode,
  getTransactionByCampaignId,
  getTransactionByFromToUserId,
  updateTransactionStatus,
  updateTransactionPaymentStatus,
  uploadTransactionPaymentProof,
} from "../controllers/transactionController.js";
// import { validateTokenMiddleware } from "../config/app.js";
import validateTokenMiddleware from "../middleware/validateToken.js";

const router = express.Router();

router.use(validateTokenMiddleware);

router.get("/", getTransactions);
router.get("/code/:transactionCode", getTransactionByCode);
router.get("/fromToUserId/:fromToUserId", getTransactionByFromToUserId);
router.get("/campaignId/:campaignId", getTransactionByCampaignId);
router.get("/count", getCountTransaction);

router.post("/", addTransaction);
router.post("/update-status", updateTransactionStatus);
router.post("/update-payment-status", updateTransactionPaymentStatus);
router.post("/upload-payment-proof", uploadTransactionPaymentProof);

export default router;
