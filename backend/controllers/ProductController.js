import products from "../dummy/products.js";
import { SERVER_ERROR } from "../constants/ErrorRes.js";

export const getProducts = async (req, res, next) => {
  try {
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(SERVER_ERROR);
  }
};

export const getSingleProduct = async (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  try {
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(SERVER_ERROR);
  }
};
