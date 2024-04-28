import { createContractInstance, sendRawTx } from "../services/web3Service.js";
import { consoleForDevelop } from "../config/app.js";

export const getAllTransactionDetail = async () => {
  consoleForDevelop("Get Transaction Details Process [Service]");
  const contract = await createContractInstance("transactionDetail");
  const transactionDetails = await contract.methods
    .getAllTransactionDetail()
    .call();

  const mappedTransactionDetails = transactionDetails.map(
    (transactionDetail) => {
      return {
        transactionCode: transactionDetail[0],
        productName: transactionDetail[1],
        productDescription: transactionDetail[2],
        tokenOfProduct: transactionDetail[3],
        productId: transactionDetail[4],
        price: transactionDetail[5],
        createdAt: transactionDetail[6].toString(),
      };
    }
  );

  consoleForDevelop("Transaction details fetched successfully", "footer");
  return mappedTransactionDetails;
};

export const addTransactionDetail = async (req, res) => {
  consoleForDevelop("Add Transaction Detail Process [Service]");
  const {
    transactionCode,
    productName,
    productDescription,
    tokenOfProduct,
    productId,
    price,
    createdAt,
  } = req;
  const arrayParams = [
    transactionCode,
    productName,
    productDescription,
    tokenOfProduct,
    productId,
    price,
    createdAt,
  ];
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
