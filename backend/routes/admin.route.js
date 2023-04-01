const express = require("express");
const {editProduct,deleteProduct,deleteUser} = require("../controllers/admin.controller");

const adminRouter = express.Router();

adminRouter.patch("/product", editProduct);
adminRouter.delete("/product",deleteProduct);
adminRouter.delete("/user",deleteUser);


module.exports = {adminRouter}