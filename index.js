import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import TransactionRoute from "./routes/transactionRoute.js";
import TransactionDetailRoute from "./routes/transactionDetailRoute.js";

// import for testing route
import TestRoute from "./routes/testRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/transactions", TransactionRoute);
app.use("/api/transaction-details", TransactionDetailRoute);

// route for testing
app.get("/", (req, res) => {
  res.redirect("/test/menu");
});
app.use("/test", TestRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
  console.log(
    `Open http://localhost:${process.env.APP_PORT} to see the result`
  );
});
