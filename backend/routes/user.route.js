const express = require("express");
const { userSignup, userLogin, getUsers } = require("../controllers/user.controller");

const userRouter = express.Router();


userRouter.get("/", getUsers);
userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);


module.exports = { userRouter };