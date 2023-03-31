const express = require("express");
const { addAllProducts, getProducts } = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.post("/add", addAllProducts);
productRouter.get("/", getProducts);


module.exports = { productRouter };