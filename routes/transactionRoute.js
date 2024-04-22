import express from "express";
import {
  getTransactions,
  addTransaction,
} from "../controllers/transactionController.js";
// import { validateTokenMiddleware } from "../config/app.js";
import validateTokenMiddleware from "../middleware/validateToken.js";

const router = express.Router();

router.use(validateTokenMiddleware);

router.get("/", getTransactions);
router.post("/", addTransaction);

export default router;
