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
        price: transactionDetail[4],
        createdAt: transactionDetail[5].toString(),
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
    price,
    createdAt,
  } = req.body;
  const arrayParams = [
    transactionCode,
    productName,
    productDescription,
    tokenOfProduct,
    price,
    createdAt,
  ];
  var response = await sendRawTx(
    arrayParams,
    "addTransactionDetail",
    "transactionDetail"
  );
  return response;
};
