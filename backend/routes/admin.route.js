const express = require("express");
const { editProduct, deleteProduct, deleteUser, addProduct, adminSignup, adminLogin } = require("../controllers/admin.controller");

const adminRouter = express.Router();

adminRouter.post("/signup", adminSignup);
adminRouter.post("/login", adminLogin);
adminRouter.post("/product", addProduct);
adminRouter.patch("/product/:prodID", editProduct);
adminRouter.delete("/product/:prodID", deleteProduct);
adminRouter.delete("/user/:userID", deleteUser);


module.exports = { adminRouter }


