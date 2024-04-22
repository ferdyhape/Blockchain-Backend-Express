import dotenv from "dotenv";
dotenv.config();

const validateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (token !== process.env.API_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

export default validateToken;
