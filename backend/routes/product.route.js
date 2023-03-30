const express = require("express");
const { addAllProducts } = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.post("/add", addAllProducts);

module.exports = { productRouter };