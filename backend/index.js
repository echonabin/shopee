import express from "express";
const port = process.env.PORT || 3333;
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
// Env config
dotenv.config();

const app = express();
// Route imports
import productRoute from "./routes/Product.js";

app.use(cors());
app.use(bodyParser.json());

app.use("/products", productRoute);
app.listen(port, () =>
  console.log(
    `ProshoAPI app listening on ${process.env.NODE_ENV} at http://localhost:${port}`
  )
);
