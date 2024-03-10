import express from "express";
import {
  getTransactions,
  addTransaction,
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/", getTransactions);
router.post("/", addTransaction);

export default router;
