import express from "express";
import {
  getTransactionDetails,
  addTransactionDetail,
} from "../controllers/transactionDetailController.js";
import { validateTokenMiddleware } from "../config/app.js";

const router = express.Router();

router.use(validateTokenMiddleware);

router.get("/", getTransactionDetails);
router.post("/", addTransactionDetail);

export default router;
