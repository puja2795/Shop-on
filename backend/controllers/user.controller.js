const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await UserModel.find({ email });
        if (user.length === 0) {
            bcrypt.hash(password, 4, (err, hash) => {
                if (err) {
                    res.status(400).send({ "msg": err.message });
                }
                else {
                    const user = new UserModel({ name, email, password: hash });
                    user.save();
                    res.status(200).send({ "msg": "Registration Successfull !!" });
                }
            })
        }
        else {
            res.status(400).send({ "msg": "User already exist. Please login." })
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({ "msg": "Login Successful !!", "token": jwt.sign({ "userID": user._id }, "my_signature") });
                }
                else {
                    res.status(400).send({ "msg": "Wrong password !!" });
                }
            })
        } else {
            res.status(400).send({ "msg": "User not found, Please Check your email !!" });
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

module.exports = { userSignup, userLogin };