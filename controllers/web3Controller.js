import {
  getAllBlocks as getAllBlocksService,
  deploySmartContract as deploySmartContractService,
  getBlockByNumber as getBlockByNumberService,
  getBlockFromTransactionHash as getBlockFromTransactionHashService,
} from "../services/web3Service.js";
import { consoleForDevelop } from "../config/app.js";

export const getBlockFromTransactionHash = async (req, res) => {
  const { transactionHash } = req.params;
  try {
    const block = await getBlockFromTransactionHashService(transactionHash);
    return res.status(200).json({ data: block });
  } catch (error) {
    console.error("Error getting block from transaction hash:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getBlockByNumber = async (req, res) => {
  const { blockNumber } = req.params;
  try {
    const block = await getBlockByNumberService(blockNumber);
    return res.status(200).json({ data: block });
  } catch (error) {
    console.error("Error getting block by number:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllBlocks = async (req, res) => {
  try {
    const blocks = await getAllBlocksService();
    return res.status(200).json({ data: blocks });
  } catch (error) {
    console.error("Error getting all blocks:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

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
