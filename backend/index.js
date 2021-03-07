import express from "express";
const port = process.env.PORT || 3333;
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
import connectDb from "./config/db.js";
// Error Handler
import { notFound, errorHandler } from "./middlewares/Error/errorMiddleware.js";
// Route imports
import productRoute from "./routes/Product.js";

// Env config
dotenv.config();
// Db init
connectDb();

app.use(cors());
app.use(bodyParser.json());

app.use("/products", productRoute);

// Default fallback for unknown route
app.use(notFound);
// Default for all errors
app.use(errorHandler);

app.listen(port, () =>
  console.log(
    `ProshoAPI app listening on ${process.env.NODE_ENV} at ` +
      `http://localhost:${port}`.magenta.underline.bold
  )
);
