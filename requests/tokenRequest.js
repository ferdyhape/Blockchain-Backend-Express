import { body } from "express-validator";

export const validateAddToken = [
  body("campaignId").isString(),
  body("transactionCode").isString(),
  body("token").isString(),
  body("status").isString(),
  body("soldTo").isString(),
];

// changeStatusByTransactionCode
export const validateChangeStatusByTransactionCode = [
  body("transactionCode").isString(),
  body("status").isString(),
];

// deleteTokenByTransactionCode;
export const validateDeleteTokenByTransactionCode = [
  body("transactionCode").isString(),
  body("quantity").isNumeric(),
];

// deleteTokenByCampaignIdAndSoldTo;
export const validatedeleteTokenByCampaignIdAndSoldTo = [
  body("campaignId").isString(),
  body("quantity").isNumeric(),
  body("soldTo").isString(),
];
