import express from "express";
import {
  addProducts,
  deleteProductById,
  getAllProducts,
  getProductsById,
  patchProductById,
  putProductById,
} from "../controllers/productsController.js";

let productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", addProducts);
productRouter.get("/:id", getProductsById);
productRouter.delete("/:id", deleteProductById);
productRouter.patch("/:id", patchProductById);
productRouter.put("/:id", putProductById);

export default productRouter;
