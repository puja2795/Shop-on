const express = require("express");
const { userSignup, userLogin, getUsers, addOrUpdatedAddress } = require("../controllers/user.controller");

const userRouter = express.Router();


userRouter.get("/", getUsers);
userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.patch("/address", addOrUpdatedAddress)


module.exports = { userRouter };