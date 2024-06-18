import { body } from "express-validator";

export const validateAddTransactionDetail = [
  body("transactionCode").isString(),
  body("price").isNumeric(),
  body("token").isString(),
  body("createdAt").isNumeric(),
];
