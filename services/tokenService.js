import { createContractInstance, sendRawTx } from "../services/web3Service.js";
import { consoleForDevelop } from "../config/app.js";

const mapToken = (token) => {
  return {
    campaignId: token[0],
    transactionCode: token[1],
    token: token[2],
    status: token[3],
    soldTo: token[4],
  };
};

export const addToken = async (req, res) => {
  consoleForDevelop("Add Token Process [Service]");
  const { campaignId, transactionCode, token, status, soldTo } = req;
  const arrayParams = [campaignId, transactionCode, token, status, soldTo];
  const response = await sendRawTx(arrayParams, "addToken", "token");

  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Token added successfully",
        "Transaction Hash: " + response.transactionHash,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};

export const changeStatusByTransactionCode = async (req, res) => {
  consoleForDevelop("Change Status By Transaction Code Process [Service]");
  const { transactionCode, status } = req;
  // console.log(["Transaction Code: " + transactionCode, "Status: " + status]);
  const arrayParams = [transactionCode, status];
  const response = await sendRawTx(
    arrayParams,
    "changeStatusByTransactionCode",
    "token"
  );

  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Token status updated successfully",
        "Transaction Hash: " + response.transactionHash,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};

export const deleteTokenByTransactionCode = async (req) => {
  consoleForDevelop("Delete Token By Transaction Code Process [Service]");
  const { transactionCode, quantity } = req;
  const arrayParams = [transactionCode, quantity];
  const response = await sendRawTx(
    arrayParams,
    "deleteTokenByTransactionCode",
    "token"
  );

  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Token deleted successfully",
        "Transaction Hash: " + response.transactionHash,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};

export const deleteTokenByCampaignIdAndSoldTo = async (req) => {
  consoleForDevelop("Delete Token By Campaign ID Process [Service]");
  const { campaignId, soldTo, quantity } = req;
  const arrayParams = [campaignId, soldTo, quantity];
  const response = await sendRawTx(
    arrayParams,
    "deleteTokenByCampaignIdAndSoldTo",
    "token"
  );

  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Token deleted successfully",
        "Transaction Hash: " + response.transactionHash,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};

export const getAllTokens = async () => {
  consoleForDevelop("Get All Tokens Process [Service]");
  const contract = await createContractInstance("token");
  const tokens = await contract.methods.getAllTokens().call();

  const mappedTokens = tokens.map((token) => mapToken(token));
  consoleForDevelop("Tokens fetched successfully", "footer");

  return mappedTokens;
};

export const getTokensBySoldTo = async (soldTo) => {
  consoleForDevelop("Get Token By Sold To Process [Service]");
  const contract = await createContractInstance("token");
  const tokens = await contract.methods.getTokensBySoldTo(soldTo).call();

  const mappedTokens = tokens.map((token) => mapToken(token));
  consoleForDevelop("Tokens fetched successfully", "footer");

  return mappedTokens;
};

export const getTokensByCampaignId = async (campaignId) => {
  consoleForDevelop("Get Tokens By Campaign ID Process [Service]");
  const contract = await createContractInstance("token");
  const tokens = await contract.methods
    .getTokensByCampaignId(campaignId)
    .call();

  const mappedTokens = tokens.map((token) => mapToken(token));
  consoleForDevelop("Tokens fetched successfully", "footer");

  return mappedTokens;
};

export const getTokensByCampaignIdAndSoldTo = async (campaignId, soldTo) => {
  consoleForDevelop("Get Tokens By Campaign ID and Sold To Process [Service]");
  const contract = await createContractInstance("token");
  const tokens = await contract.methods
    .getTokensByCampaignIdAndSoldTo(campaignId, soldTo)
    .call();
  const mappedTokens = tokens.map((token) => mapToken(token));
  consoleForDevelop("Tokens fetched successfully", "footer");

  return mappedTokens;
};

export const getSoldTokensByCampaignId = async (campaignId) => {
  consoleForDevelop("Get Sold Tokens By Campaign ID Process [Service]");
  const contract = await createContractInstance("token");
  const tokens = await contract.methods
    .getSoldTokensByCampaignId(campaignId)
    .call();

  const mappedTokens = tokens.map((token) => mapToken(token));
  consoleForDevelop("Tokens fetched successfully", "footer");

  return mappedTokens;
};

export const getTokensByTransactionCode = async (transactionCode) => {
  consoleForDevelop("Get Tokens By Transaction Code Process [Service]");
  const contract = await createContractInstance("token");
  const tokens = await contract.methods
    .getTokensByTransactionCode(transactionCode)
    .call();
  const mappedTokens = tokens.map((token) => mapToken(token));
  consoleForDevelop("Tokens fetched successfully", "footer");

  return mappedTokens;
};
