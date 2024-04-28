import { createContractInstance, sendRawTx } from "../services/web3Service.js";
import { consoleForDevelop } from "../config/app.js";

export const getAllTransaction = async () => {
  consoleForDevelop("Get Transactions Process [Service]");
  const contract = await createContractInstance("transaction");
  const transactions = await contract.methods.getAllTransaction().call();
  const mappedTransactions = transactions.map((transaction) => {
    return {
      transactionId: transaction[0].toString(),
      transactionCode: transaction[1],
      from: transaction[2],
      fromId: transaction[3],
      to: transaction[4],
      toId: transaction[5],
      orderType: transaction[6],
      paymentStatus: transaction[7],
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
    from,
    fromId,
    to,
    toId,
    orderType,
    paymentStatus,
    createdAt,
  } = req;
  let arrayParams = [
    transactionCode,
    from,
    fromId,
    to,
    toId,
    orderType,
    paymentStatus,
    createdAt,
  ];
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
