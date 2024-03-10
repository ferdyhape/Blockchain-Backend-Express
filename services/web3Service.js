import Web3 from "web3";
import {
  ABI_TRANSACTION,
  ABI_TRANSACTION_DETAIL,
  CONTRACT_ADDRESS_TRANSACTION,
  CONTRACT_ADDRESS_TRANSACTION_DETAIL,
  PRIVATE_KEY,
  INFURA_URL,
  WALLET_ADDRESS,
} from "../config/smartContractConfig.js";

const web3 = new Web3(INFURA_URL);

const validateUseFor = (useFor) => {
  if (useFor === "transaction") {
    return [ABI_TRANSACTION, CONTRACT_ADDRESS_TRANSACTION];
  }
  if (useFor === "transactionDetail") {
    return [ABI_TRANSACTION_DETAIL, CONTRACT_ADDRESS_TRANSACTION_DETAIL];
  }
  throw new Error("Invalid useFor value");
};

export const createContractInstance = async (useFor) => {
  const [abiUsed, contractAddressUsed] = validateUseFor(useFor);
  const contract = new web3.eth.Contract(abiUsed, contractAddressUsed);
  return contract;
};

export const sendRawTx = async (arrayParams, method, useFor) => {
  try {
    const [abiUsed, contractAddressUsed] = validateUseFor(useFor);
    const nonce = await web3.eth.getTransactionCount(WALLET_ADDRESS);
    let gasPrice = await web3.eth.getGasPrice();
    console.log("gasPrice", gasPrice);
    if (useFor === "transactionDetail") {
      gasPrice = gasPrice.toString() * 2;
    }
    const gasLimit = 3000000;
    const contract = new web3.eth.Contract(abiUsed, contractAddressUsed);
    const data = contract.methods[method](...arrayParams).encodeABI();

    const rawTx = {
      nonce: web3.utils.toHex(nonce),
      gasPrice: web3.utils.toHex(gasPrice),
      gasLimit: web3.utils.toHex(gasLimit),
      to: contractAddressUsed,
      value: "0x00",
      data: data,
    };
    const signedTx = await web3.eth.accounts.signTransaction(
      rawTx,
      PRIVATE_KEY
    );
    const sentTx = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    return sentTx;
  } catch (error) {
    console.error("Error sending raw transaction:", error);
    throw error;
  }
};
