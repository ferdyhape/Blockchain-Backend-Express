import { deploySmartContract as deploySmartContractService } from "../services/web3Service.js";
import { consoleForDevelop } from "../config/app.js";

const deploySmartContract = async (contractName) => {
  // consoleForDevelop(
  //   `Deploy Smart Contract Process [Controller] - ${contractName}`
  // );
  try {
    const result = await deploySmartContractService(contractName);
    return result;
  } catch (error) {
    console.error(`Error deploying ${contractName}:`, error);
    throw error;
  }
};

export const deployTransactionContract = async (req, res) => {
  const contractName = "TransactionContract";
  try {
    const result = await deploySmartContract(contractName);
    // return res.status(200).json({
    //   message: `${contractName} deployed successfully`,
    //   data: result,
    // });
    return result;
  } catch (error) {
    console.error(`Error deploying ${contractName}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deployTransactionDetailContract = async (req, res) => {
  const contractName = "TransactionDetailContract";
  try {
    const result = await deploySmartContract(contractName);
    // return res.status(200).json({
    //   message: `${contractName} deployed successfully`,
    //   data: result,
    // });
    return result;
  } catch (error) {
    console.error(`Error deploying ${contractName}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deployTokenContract = async (req, res) => {
  const contractName = "TokenContract";
  try {
    const result = await deploySmartContract(contractName);
    // return res.status(200).json({
    //   message: `${contractName} deployed successfully`,
    //   data: result,
    // });
    return result;
  } catch (error) {
    console.error(`Error deploying ${contractName}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};
