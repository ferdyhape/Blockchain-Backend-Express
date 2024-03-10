import { body } from "express-validator";

export const validateAddTransaction = [
  body("transactionCode").isString(),
  body("buyer").isString(),
  body("buyerId").isString(),
  body("sellerCompany").isString(),
  body("sellerId").isString(),
  body("sumOfProduct").isNumeric(),
  body("totalPrice").isString(),
  body("paymentStatus").isString(),
  body("createdAt").isNumeric(),
];
