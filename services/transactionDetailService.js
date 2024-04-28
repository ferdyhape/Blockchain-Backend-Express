import { createContractInstance, sendRawTx } from "../services/web3Service.js";

export const getAllTransactionDetail = async () => {
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

  return mappedTransactionDetails;
};

export const addTransactionDetail = async (req, res) => {
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
  console.log("transaction hash: ", response.transactionHash);
};
