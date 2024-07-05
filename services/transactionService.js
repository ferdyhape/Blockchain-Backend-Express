import { createContractInstance, sendRawTx } from "../services/web3Service.js";
import { consoleForDevelop } from "../config/app.js";

// Helper function to map transaction data
const mapTransaction = (transaction) => {
  return {
    transactionCode: transaction[0].toString(),
    campaignId: transaction[1].toString(),
    fromToUserId: transaction[2].toString(),
    orderType: transaction[3],
    paymentStatus: transaction[4],
    status: transaction[5],
    quantity: transaction[6].toString(),
    totalPrice: transaction[7].toString(),
    // paymentMethodDetailId: transaction[8].toString(),
    paymentProof: transaction[8],
    createdAt: transaction[9],
  };
};

// GET
export const getAllTransaction = async () => {
  consoleForDevelop("Get Transactions Process [Transaction Service]");
  const contract = await createContractInstance("transaction");
  const transactions = await contract.methods.getAllTransactions().call();
  const mappedTransactions = transactions.map(mapTransaction);
  consoleForDevelop("Transactions fetched successfully", "footer");
  return mappedTransactions;
};

export const getTransactionByCampaignId = async (campaignId) => {
  consoleForDevelop("Get Transaction by CampaignId Process [Service]");
  const contract = await createContractInstance("transaction");
  const transactions = await contract.methods
    .getTransactionByCampaignId(campaignId)
    .call();
  const mappedTransactions = transactions.map(mapTransaction);
  consoleForDevelop("Transactions fetched successfully", "footer");
  return mappedTransactions;
};

export const getTranasctionByCode = async (transactionCode) => {
  consoleForDevelop("Get Transaction by Code Process [Service]");
  const contract = await createContractInstance("transaction");
  const transaction = await contract.methods
    .getTransactionByCode(transactionCode)
    .call();
  consoleForDevelop("Transaction fetched successfully", "footer");
  return mapTransaction(transaction);
};

export const getTransactionByFromToUserId = async (fromToUserId) => {
  consoleForDevelop("Get Transaction by FromToUserId Process [Service]");
  const contract = await createContractInstance("transaction");
  const transactions = await contract.methods
    .getTransactionByFromToUserId(fromToUserId)
    .call();
  const mappedTransactions = transactions.map(mapTransaction);
  consoleForDevelop("Transactions fetched successfully", "footer");
  return mappedTransactions;
};

export const getCountTransaction = async () => {
  consoleForDevelop("Get Count Transaction Process [Service]");
  const contract = await createContractInstance("transaction");
  const count = await contract.methods.getCountTransaction().call();
  consoleForDevelop("Transaction count fetched successfully", "footer");
  return count.toString();
};

// POST
export const addTransaction = async (req) => {
  consoleForDevelop("Add Transaction Process [Service]");
  const {
    transactionCode,
    campaignId,
    fromToUserId,
    orderType,
    paymentStatus,
    status,
    quantity,
    totalPrice,
    // paymentMethodDetailId,
    createdAt,
  } = req;
  let arrayParams = [
    transactionCode,
    campaignId,
    fromToUserId,
    orderType,
    paymentStatus,
    status,
    quantity,
    totalPrice,
    // paymentMethodDetailId,
    createdAt,
  ];
  var response = await sendRawTx(arrayParams, "addTransaction", "transaction");
  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Transaction added successfully",
        "Transaction Hash: " + response.transactionHash,
        "Transaction: " + response,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};

export const updateTransactionStatus = async (req) => {
  consoleForDevelop("Update Transaction Status Process [Service]");
  const { transactionCode, status } = req;
  let arrayParams = [transactionCode, status];
  var response = await sendRawTx(arrayParams, "updateStatus", "transaction");
  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Transaction status updated successfully",
        "Transaction Hash: " + response.transactionHash,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};

export const updateTransactionPaymentStatus = async (req) => {
  consoleForDevelop("Update Transaction Payment Status Process [Service]");
  const { transactionCode, paymentStatus } = req;
  let arrayParams = [transactionCode, paymentStatus];
  var response = await sendRawTx(
    arrayParams,
    "updatePaymentStatus",
    "transaction"
  );
  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Transaction payment status updated successfully",
        "Transaction Hash: " + response.transactionHash,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};

export const updateTransactionPaymentProof = async (req) => {
  consoleForDevelop("Upload Payment Proof Process [Service]");
  const { transactionCode, paymentProof } = req;
  let arrayParams = [transactionCode, paymentProof];
  var response = await sendRawTx(
    arrayParams,
    "updatePaymentProof",
    "transaction"
  );
  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Payment proof uploaded successfully",
        "Transaction Hash: " + response.transactionHash,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};
