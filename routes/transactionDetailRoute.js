import express from "express";
import {
  getTransactionDetails,
  addTransactionDetail,
} from "../controllers/transactionDetailController.js";

const router = express.Router();

router.get("/", getTransactionDetails);
router.post("/", addTransactionDetail);

export default router;
