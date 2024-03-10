import { createContractInstance, sendRawTx } from "../services/web3Service.js";

export const getAllTransaction = async () => {
  const contract = await createContractInstance("transaction");
  const transactions = await contract.methods.getAllTransaction().call();
  const mappedTransactions = transactions.map((transaction) => {
    return {
      transactionId: transaction[0],
      transactionCode: transaction[1],
      buyer: transaction[2],
      buyerId: transaction[3],
      sellerCompany: transaction[4],
      sellerId: transaction[5],
      sumOfProduct: transaction[6],
      totalPrice: transaction[7],
      paymentStatus: transaction[8],
      createdAt: transaction[9],
    };
  });
  return mappedTransactions;
};

export const addTransaction = async (req, res) => {
  const {
    transactionCode,
    buyer,
    buyerId,
    sellerCompany,
    sellerId,
    sumOfProduct,
    totalPrice,
    paymentStatus,
    createdAt,
  } = req.body;
  let arrayParams = [
    transactionCode,
    buyer,
    buyerId,
    sellerCompany,
    sellerId,
    sumOfProduct,
    totalPrice,
    paymentStatus,
    createdAt,
  ];
  var response = await sendRawTx(arrayParams, "addTransaction", "transaction");
  return response;
};
