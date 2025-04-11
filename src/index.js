// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "/.env",
});
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection failed! ", err);
  });

// Method 1 Of connecting database
/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("ERRR: ", error);
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
})();

*/
