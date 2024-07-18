import express from "express";
import {
  deployTransactionContract,
  deployTransactionDetailContract,
  deployTokenContract,
  getAllBlocks,
  getBlockByNumber,
  getBlockFromTransactionHash,
} from "../controllers/web3Controller.js";

import { validateTokenDeploySmartContract } from "../middleware/validateToken.js";
import { validateTokenGeneral } from "../middleware/validateToken.js";

const router = express.Router();

router.use(validateTokenGeneral);

// router.get("/deploy/transaction", deployTransactionContract);
// router.get("/deploy/transaction-detail", deployTransactionDetailContract);
// router.get("/deploy/token", deployTokenContract);
router.get("/blocks", getAllBlocks);
router.get("/block/:blockNumber", getBlockByNumber);
router.get("/block/transaction/:transactionHash", getBlockFromTransactionHash);

export default router;
