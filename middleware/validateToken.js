import dotenv from "dotenv";
dotenv.config();

export const validateTokenGeneral = (req, res, next) => {
  const token = req.header("Authorization");
  if (token !== process.env.API_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

export const validateTokenDeploySmartContract = (req, res, next) => {
  const token = req.header("Authorization");
  if (token !== process.env.DEPLOY_SMART_CONTRACT_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
