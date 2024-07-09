import {
  // addToken as addTokenService,
  getAllTokens as getAllTokensService,
  getTokensByCampaignId as getTokensByCampaignIdService,
  getTokensByCampaignIdAndSoldTo as getTokensByCampaignIdAndSoldToService,
  getSoldTokensByCampaignId as getSoldTokensByCampaignIdService,
  getTokensByTransactionCode as getTokensByTransactionCodeService,
  getTokensBySoldTo as getTokensBySoldToService,
} from "../services/tokenService.js";
import { validationResult } from "express-validator";
import {
  validateAddToken,
  validateChangeStatusByTransactionCode,
  validateDeleteTokenByTransactionCode,
  validatedeleteTokenByCampaignIdAndSoldTo,
  validateDeleteTokenByCampaignId,
} from "../requests/tokenRequest.js";
import {
  addTokenToQueue,
  changeStatusByTransactionCodeToQueue,
  deleteTokenByTransactionCodeToQueue,
  deleteTokenByCampaignIdAndSoldToToQueue,
  deleteTokenByCampaignIdToQueue,
} from "../queue/tokenQueue.js";
import { consoleForDevelop } from "../config/app.js";

export const addToken = async (req, res) => {
  consoleForDevelop("Add Token Process [Controller]", "header");
  try {
    consoleForDevelop("Validating token data [Controller]");
    Promise.all(validateAddToken.map((validator) => validator.run(req))).then(
      () => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        addTokenToQueue(req.body);
        return res.status(200).json({
          message: "Token add in progress...",
        });
      }
    );
  } catch (error) {
    console.error("Error adding token:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const changeStatusByTransactionCode = async (req, res) => {
  consoleForDevelop(
    "Change Status By Transaction Code Process [Controller]",
    "header"
  );
  try {
    consoleForDevelop("Validating token data [Controller]");
    Promise.all(
      validateChangeStatusByTransactionCode.map((validator) =>
        validator.run(req)
      )
    ).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // console.log("datanya adalah ", req.body);
      changeStatusByTransactionCodeToQueue(req.body);
      return res.status(200).json({
        message: "Token status change in progress...",
      });
    });
  } catch (error) {
    console.error("Error changing token status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTokenByTransactionCode = async (req, res) => {
  consoleForDevelop(
    "Delete Token By Transaction Code Process [Controller]",
    "header"
  );
  try {
    consoleForDevelop("Validating token data [Controller]");
    Promise.all(
      validateDeleteTokenByTransactionCode.map((validator) =>
        validator.run(req)
      )
    ).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      deleteTokenByTransactionCodeToQueue(req.body);
      return res.status(200).json({
        message: "Token delete in progress...",
      });
    });
  } catch (error) {
    console.error("Error deleting token:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTokenByCampaignIdAndSoldTo = async (req, res) => {
  consoleForDevelop(
    "Delete Token By Campaign ID Process [Controller]",
    "header"
  );
  try {
    consoleForDevelop("Validating token data [Controller]");
    Promise.all(
      validatedeleteTokenByCampaignIdAndSoldTo.map((validator) =>
        validator.run(req)
      )
    ).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      deleteTokenByCampaignIdAndSoldToToQueue(req.body);
      return res.status(200).json({
        message: "Token delete in progress...",
      });
    });
  } catch (error) {
    console.error("Error deleting token:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTokenByCampaignId = async (req, res) => {
  consoleForDevelop(
    "Delete Token By Campaign ID Process [Controller]",
    "header"
  );
  try {
    consoleForDevelop("Validating token data [Controller]");
    Promise.all(
      validateDeleteTokenByCampaignId.map((validator) => validator.run(req))
    ).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      deleteTokenByCampaignIdToQueue(req.body);
      return res.status(200).json({
        message: "Token delete in progress...",
      });
    });
  } catch (error) {
    console.error("Error deleting token:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllTokens = async (req, res) => {
  consoleForDevelop("Get All Tokens Process [Controller]", "header");
  try {
    const tokens = await getAllTokensService();
    if (tokens.length === 0) {
      return res.status(404).json({ error: "Tokens not found" });
    }
    return res.status(200).json({
      message: "Tokens fetched successfully",
      data: tokens,
    });
  } catch (error) {
    console.error("Error fetching all tokens:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTokensBySoldTo = async (req, res) => {
  consoleForDevelop("Get Token By Sold To Process [Controller]", "header");
  try {
    const tokens = await getTokensBySoldToService(req.params.soldTo);
    if (tokens.length === 0) {
      return res.status(404).json({ error: "Tokens not found" });
    }
    return res.status(200).json({
      message: "Tokens fetched successfully",
      data: tokens,
    });
  } catch (error) {
    console.error("Error fetching token by sold to:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTokensByCampaignId = async (req, res) => {
  consoleForDevelop("Get Tokens By Campaign ID Process [Controller]", "header");
  try {
    const tokens = await getTokensByCampaignIdService(req.params.campaignId);
    if (tokens.length === 0) {
      return res.status(404).json({ error: "Tokens not found" });
    }
    return res.status(200).json({
      message: "Tokens fetched successfully",
      data: tokens,
    });
  } catch (error) {
    console.error("Error fetching tokens by campaign ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTokensByCampaignIdAndSoldTo = async (req, res) => {
  consoleForDevelop(
    "Get Tokens By Campaign ID and Sold To Process [Controller]",
    "header"
  );
  try {
    const tokens = await getTokensByCampaignIdAndSoldToService(
      req.params.campaignId,
      req.params.soldTo
    );
    if (tokens.length === 0) {
      return res.status(404).json({ error: "Tokens not found" });
    }
    return res.status(200).json({
      message: "Tokens fetched successfully",
      data: tokens,
    });
  } catch (error) {
    console.error("Error fetching tokens by campaign ID and sold to:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getSoldTokensByCampaignId = async (req, res) => {
  consoleForDevelop(
    "Get Sold Tokens By Campaign ID Process [Controller]",
    "header"
  );
  try {
    const tokens = await getSoldTokensByCampaignIdService(
      req.params.campaignId
    );
    if (tokens.length === 0) {
      return res.status(404).json({ error: "Tokens not found" });
    }
    return res.status(200).json({
      message: "Tokens fetched successfully",
      data: tokens,
    });
  } catch (error) {
    console.error("Error fetching sold tokens by campaign ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTokensByTransactionCode = async (req, res) => {
  consoleForDevelop(
    "Get Tokens By Transaction Code Process [Controller]",
    "header"
  );
  try {
    const tokens = await getTokensByTransactionCodeService(
      req.params.transactionCode
    );
    if (tokens.length === 0) {
      return res.status(404).json({ error: "Tokens not found" });
    }
    return res.status(200).json({
      message: "Tokens fetched successfully",
      data: tokens,
    });
  } catch (error) {
    console.error("Error fetching tokens by transaction code:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const getTokensBySoldTo = async (req, res) => {
//   consoleForDevelop("Get Tokens By Sold To Process [Controller]", "header");
//   try {
//     const tokens = await getTokensBySoldToService(req.params.soldTo);
//     if (tokens.length === 0) {
//       return res.status(404).json({ error: "Tokens not found" });
//     }
//     return res.status(200).json({
//       message: "Tokens fetched successfully",
//       data: tokens,
//     });
//   } catch (error) {
//     console.error("Error fetching tokens by sold to:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
