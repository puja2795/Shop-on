const express = require("express");
const { getCartData, deleteFromCart } = require("../controllers/cart.controller");

const cartRouter = express.Router();


cartRouter.get("/", getCartData);
cartRouter.delete("/:prodID", deleteFromCart);



module.exports = { cartRouter };