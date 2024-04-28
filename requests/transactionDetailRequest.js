import { body } from "express-validator";

export const validateAddTransactionDetail = [
  body("transactionCode").isArray(),
  body("productName").isArray(),
  body("productDescription").isArray(),
  body("tokenOfProduct").isArray(),
  body("productId").isArray(),
  body("price").isArray(),
  body("createdAt").isArray(),
];
