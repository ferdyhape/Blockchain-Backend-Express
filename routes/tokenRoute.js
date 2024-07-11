import express from "express";

import {
  addToken,
  changeStatusByTransactionCode,
  deleteTokenByTransactionCode,
  deleteTokenByCampaignIdAndSoldTo,
  deleteTokenByCampaignId,
  getAllTokens,
  getTokensByCampaignId,
  getTokensByCampaignIdAndSoldTo,
  getSoldTokensByCampaignId,
  getTokensByTransactionCode,
  getTokensBySoldTo,
} from "../controllers/tokenController.js";
import { validateTokenGeneral } from "../middleware/validateToken.js";

const router = express.Router();

router.use(validateTokenGeneral);

router.post("/", addToken);
router.post("/changeStatusByTransactionCode", changeStatusByTransactionCode);
router.post("/deleteTokenByTransactionCode", deleteTokenByTransactionCode);
router.post(
  "/deleteTokenByCampaignIdAndSoldTo",
  deleteTokenByCampaignIdAndSoldTo
);
router.post("/deleteTokenByCampaignId", deleteTokenByCampaignId);

router.get("/transaction/:transactionCode", getTokensByTransactionCode);
router.get("/soldTo/:soldTo", getTokensBySoldTo);
router.get("/", getAllTokens);
router.get("/campaign/:campaignId", getTokensByCampaignId);
router.get("/sold/:campaignId", getSoldTokensByCampaignId);
router.get(
  "/campaignSoldTo/:campaignId/:soldTo",
  getTokensByCampaignIdAndSoldTo
);

export default router;
