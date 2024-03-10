import {
  getAllTransactionDetail as getAllTransactionDetailService,
  addTransactionDetail as addTransactionDetailService,
} from "../services/transactionDetailService.js";

export const getTransactionDetails = async (req, res) => {
  try {
    // Call the service function
    const transactionDetails = await getAllTransactionDetailService();

    return res.status(200).json({ transactionDetails });
  } catch (error) {
    console.error("Error fetching transaction details from contract:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addTransactionDetail = async (req, res) => {
  try {
    // Call the service function
    var response = await addTransactionDetailService(req, res);

    return res.status(200).json({
      message: "Transaction detail added successfully",
      transactionHash: response.transactionHash,
    });
  } catch (error) {
    console.error("Error adding transaction detail:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
