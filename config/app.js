import dotenv from "dotenv";
dotenv.config();

export const consoleForDevelop = (stringText, isHeaderOrFooter = null) => {
  if (process.env.APP_ENV === "development") {
    if (isHeaderOrFooter === "header") {
      console.log("\n\n--------");
      console.log(
        "==========================================================="
      );
      console.log(
        "Console For Developing Process (" + new Date().toLocaleString() + ")"
      );
      console.log(
        "==========================================================="
      );
      console.log("Start Process...");
    }
    console.log(stringText);
    if (isHeaderOrFooter === "footer") {
      console.log(
        "==========================================================="
      );
      console.log("--------\n\n");
    }
  }
};
