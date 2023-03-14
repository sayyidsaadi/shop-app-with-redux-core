import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// Init Express
const app = express();

// Environment Variable
dotenv.config();
const PORT = process.env.PORT || 9090;

// Listen Server
app.listen(PORT, () => {
  console.log(`Server is Running On Port ${PORT}`.bgGreen.black);
});
