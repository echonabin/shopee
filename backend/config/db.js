import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

// DB connection && Server Init
dotenv.config();
const db = process.env.MONGO_URI;
const connectDb = async () => {
  console.log(db);
  try {
    const conn = await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Db connected with: ${conn.connection.host}`.blue.underline);
  } catch (err) {
    console.log(`Error:${err.message}`.red.underline);
    process.exit(1);
  }
};

export default connectDb;
