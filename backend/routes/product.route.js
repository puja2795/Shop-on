const express = require("express");
const { addAllProducts, getProducts, getSingleProduct, updateProductData } = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.post("/add", addAllProducts);
productRouter.get("/", getProducts);
productRouter.get("/:prodID", getSingleProduct);
productRouter.patch("/", updateProductData);



module.exports = { productRouter };