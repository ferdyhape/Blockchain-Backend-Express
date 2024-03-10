import {
  getAllTransaction as getAllTransactionService,
  addTransaction as addTransactionService,
} from "../services/transactionService.js";

export const getTransactions = async (req, res) => {
  try {
    // Call the service function
    const transactions = await getAllTransactionService();

    return res.status(200).json({ transactions });
  } catch (error) {
    console.error("Error fetching products from contract:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addTransaction = async (req, res) => {
  try {
    // Call the service function
    var response = await addTransactionService(req, res);

    return res.status(200).json({
      message: "Transaction added successfully",
      transactionHash: response.transactionHash,
    });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
