import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { getAllTransactionInSmartContract } from "../services/web3Service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/all-transaction-smart-contract", async (req, res) => {
  try {
    const transactionDetails = await getAllTransactionInSmartContract(
      "transaction",
      "TransactionAdded"
    );
    res.status(200).json(transactionDetails);
  } catch (error) {
    console.error("Error getting all transaction detail:", error);
    res.status(500).json({ message: "Error getting all transaction" });
  }
});

// Definisikan penanganan rute dinamis untuk semua file di dalam folder "testing"
router.get("/:file", (req, res) => {
  const { file } = req.params; // Tangkap parameter "file" dari URL
  res.sendFile(path.join(__dirname, `../testing/${file}.html`)); // Kirim file HTML sesuai dengan parameter "file"
});

export default router;
