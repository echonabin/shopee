import { SERVER_ERROR } from "../constants/ErrorRes.js";
import Product from "../models/productModel.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: SERVER_ERROR });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: SERVER_ERROR });
  }
};
