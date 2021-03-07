import { Router } from "express";
const router = Router();
import {
  getProducts,
  getSingleProduct,
} from "../controllers/ProductController.js";

//  @route ==> @GET /products
//  @access ==> Public
//  @desc ==> Get all products from the server
router.get("", getProducts);
//  @route ==> @GET /products/:id
//  @access ==> Public
//  @desc ==> Get Single products from the server
router.get("/:id", getSingleProduct);

export default router;
