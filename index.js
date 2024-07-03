import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import TransactionRoute from "./routes/transactionRoute.js";
import TransactionDetailRoute from "./routes/transactionDetailRoute.js";
import TokenRoute from "./routes/tokenRoute.js";
import Web3Route from "./routes/web3Route.js";
import { compileContracts } from "./services/web3Service.js";

// import for testing route
import TestRoute from "./routes/testRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/transactions", TransactionRoute);
app.use("/api/transaction-details", TransactionDetailRoute);
app.use("/api/tokens", TokenRoute);
// app.use("/web3", Web3Route);

// route for testing
app.get("/", (req, res) => {
  res.redirect("/test/menu");
});
app.use("/test", TestRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`SERVER IS RUNNING IN PORT ${process.env.APP_PORT}`);
  console.log(
    `Open http://localhost:${process.env.APP_PORT} to see the result`
  );
});

// Compile smart contract
compileContracts();
