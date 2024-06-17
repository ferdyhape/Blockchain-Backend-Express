import { body } from "express-validator";

export const validateAddTransaction = [
  body("transactionCode").isString(),
  body("campaignId").isString(),
  body("fromToUserId").isString(),
  body("orderType").isString(),
  body("paymentStatus").isString(),
  body("status").isString(),
  body("quantity").isNumeric(),
  body("totalPrice").isNumeric(),
  body("paymentMethodDetailId").isString(),
  body("createdAt").isNumeric(),
];

export const validateUpdateTransactionStatus = [
  body("transactionCode").isString(),
  body("status").isString(),
];

export const validateUpdateTransactionPaymentStatus = [
  body("transactionCode").isString(),
  body("paymentStatus").isString(),
];

export const validateUploadTransactionPaymentProof = [
  body("transactionCode").isString(),
  body("paymentProof").isString(),
];
