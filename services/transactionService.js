import { createContractInstance, sendRawTx } from "../services/web3Service.js";
import { consoleForDevelop } from "../config/app.js";

export const getAllTransaction = async () => {
  consoleForDevelop("Get Transactions Process [Transaction Service]");
  const contract = await createContractInstance("transaction");
  const transactions = await contract.methods.getAllTransactions().call();
  const mappedTransactions = transactions.map((transaction) => {
    return {
      transactionCode: transaction[0].toString(),
      campaignId: transaction[1].toString(),
      fromToUserId: transaction[2].toString(),
      orderType: transaction[3],
      paymentStatus: transaction[4],
      status: transaction[5],
      quantity: transaction[6].toString(),
      totalPrice: transaction[7].toString(),
      createdAt: transaction[8].toString(),
    };
  });
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
  return {
    transactionCode: transaction[0].toString(),
    campaignId: transaction[1].toString(),
    fromToUserId: transaction[2].toString(),
    orderType: transaction[3],
    paymentStatus: transaction[4],
    status: transaction[5],
    quantity: transaction[6].toString(),
    totalPrice: transaction[7].toString(),
    createdAt: transaction[8].toString(),
  };
};

export const getTransactionByFromToUserId = async (fromToUserId) => {
  consoleForDevelop("Get Transaction by FromToUserId Process [Service]");
  const contract = await createContractInstance("transaction");
  const transactions = await contract.methods
    .getTransactionByFromToUserId(fromToUserId)
    .call();
  const mappedTransactions = transactions.map((transaction) => {
    return {
      transactionCode: transaction[0].toString(),
      campaignId: transaction[1].toString(),
      fromToUserId: transaction[2].toString(),
      orderType: transaction[3],
      paymentStatus: transaction[4],
      status: transaction[5],
      quantity: transaction[6].toString(),
      totalPrice: transaction[7].toString(),
      createdAt: transaction[8].toString(),
    };
  });
  consoleForDevelop("Transactions fetched successfully", "footer");
  return mappedTransactions;
};

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
    createdAt,
  ];
  console.log(arrayParams);
  var response = await sendRawTx(arrayParams, "addTransaction", "transaction");
  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Transaction added successfully",
        "Transaction Hash: " + response.transactionHash,
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
