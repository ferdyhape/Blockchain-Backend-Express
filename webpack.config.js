import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/",
    filename: "final.js",
    libraryTarget: "commonjs2",
  },
  target: "node",
  externals: {
    express: "express",
  },
};

export default config;
