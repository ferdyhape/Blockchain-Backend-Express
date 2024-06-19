import { createContractInstance, sendRawTx } from "../services/web3Service.js";
import { consoleForDevelop } from "../config/app.js";

// Helper function to map transaction detail data
const mapTransactionDetail = (transactionDetail) => {
  return {
    transactionCode: transactionDetail[0],
    price: transactionDetail[1].toString(),
    token: transactionDetail[2],
    createdAt: transactionDetail[3].toString(),
  };
};

export const addTransactionDetail = async (req, res) => {
  consoleForDevelop("Add Transaction Detail Process [Service]");
  const { transactionCode, price, token, createdAt } = req;
  const arrayParams = [transactionCode, price, token, createdAt];
  var response = await sendRawTx(
    arrayParams,
    "addTransactionDetail",
    "transactionDetail"
  );
  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Transaction detail added successfully",
        "Transaction Hash: " + response.transactionHash,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};

export const getPriceFromTransactionDetailByTransactionCode = async (
  transactionCode
) => {
  consoleForDevelop("Get Price From Transaction Detail Process [Service]");
  const contract = await createContractInstance("transactionDetail");
  const price = await contract.methods
    .getPriceFromTransactionDetailByTransactionCode(transactionCode)
    .call();
  consoleForDevelop("Price fetched successfully", "footer");
  return price.toString();
};

export const getCountTransactionDetailByTransactionCode = async (
  transactionCode
) => {
  consoleForDevelop("Get Count Transaction Detail Process [Service]");
  const contract = await createContractInstance("transactionDetail");
  const count = await contract.methods
    .getCountTransactionDetailByTransactionCode(transactionCode)
    .call();
  consoleForDevelop("Transaction detail count fetched successfully", "footer");
  return count.toString();
};

export const getTransactionDetailByTransactionCode = async (
  transactionCode
) => {
  consoleForDevelop(
    "Get Transaction Detail By Transaction Code Process [Service]"
  );
  const contract = await createContractInstance("transactionDetail");
  const transactionDetails = await contract.methods
    .getTransactionDetailByTransactionCode(transactionCode)
    .call();

  const mappedTransactionDetails = transactionDetails.map((transactionDetail) =>
    mapTransactionDetail(transactionDetail)
  );
  consoleForDevelop("Transaction detail fetched successfully", "footer");

  return mappedTransactionDetails;
};
