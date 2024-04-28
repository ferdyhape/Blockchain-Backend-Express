import { createContractInstance, sendRawTx } from "../services/web3Service.js";

export const getAllTransaction = async () => {
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
  return mappedTransactions;
};

export const addTransaction = async (req) => {
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
  // console.log("transaction hash: ", response.transactionHash);
};
