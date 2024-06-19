import express from "express";
import {
  // getTransactionDetails,
  addTransactionDetail,
  getPriceFromTransactionDetailByTransactionCode,
  getCountTransactionDetailByTransactionCode,
  getTransactionDetailByTransactionCode,
} from "../controllers/transactionDetailController.js";
import validateTokenMiddleware from "../middleware/validateToken.js";

const router = express.Router();

router.use(validateTokenMiddleware);

// router.get("/", getTransactionDetails);
router.post("/", addTransactionDetail);
router.get(
  "/price/:transactionCode",
  getPriceFromTransactionDetailByTransactionCode
);
router.get(
  "/count/:transactionCode",
  getCountTransactionDetailByTransactionCode
);
router.get(
  "/getTransactionDetails/:transactionCode",
  getTransactionDetailByTransactionCode
);

export default router;
