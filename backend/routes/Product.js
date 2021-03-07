import { Router } from "express";
const router = Router();
import {
  getProducts,
  getSingleProduct,
} from "../controllers/ProductController.js";

router.get("", getProducts);
router.get("/:id", getSingleProduct);

export default router;
