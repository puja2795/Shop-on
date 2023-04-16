const express = require("express");
const { addCartDataToMyOrders } = require("../controllers/myOrders.controller");

const myOrdersRouter = express.Router();

myOrdersRouter.get("/", addCartDataToMyOrders);

module.exports = { myOrdersRouter };