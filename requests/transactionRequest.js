import { body } from "express-validator";

export const validateAddTransaction = [
  body("transactionCode").isString(),
  body("from").isString(),
  body("fromId").isString(),
  body("to").isString(),
  body("toId").isString(),
  body("orderType").isString(),
  body("paymentStatus").isString(),
  body("createdAt").isNumeric(),
];
