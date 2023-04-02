const { UserModel } = require("../model/user.model");
const { CartModel } = require("../model/cart.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
    const { name, email, password , location} = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            bcrypt.hash(password, 4, async (err, hash) => {
                if (err) {
                    res.status(400).send({ "msg": err.message });
                }
                else {
                    const newUser = new UserModel({ name, email, password: hash, location });
                    await newUser.save();

                    const newCart = new CartModel({ userID: newUser._id, items: [] });
                    await newCart.save();

                    res.status(200).send({ "msg": "Registration Successfull !!" });
                }
            });
        }
        else {
            res.status(400).send({ "msg": "User already exists. Please login." });
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
                    res.status(200).send({ "msg": "Login Successful !!","name": user.name ,"token": jwt.sign({ "userID": user._id }, "my_signature") });
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

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        if (users.length > 0) {
            res.status(200).send(users);
        }
        else{
            res.status(200).send({ "msg": "No users found !!" });
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

const addOrUpdatedAddress = async (req, res) => {
    const  address  = req.body;
    console.log(address)
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "my_signature");
    const user = await UserModel.findOne({ _id: decoded.userID });
    try {
      let userAddress;
      if (address && address._id) {
        userAddress = await user.address.find((elem) => String(elem._id) == String(address._id) );
      }
      if (userAddress) {
        const updatedAddress = { ...userAddress, ...address };
        userAddress.set(updatedAddress); // assign updatedAddress to userAddress
      } else {
        console.log("Adding new address:", address);
        user.address.push(address);
      }
      console.log("Saving user:", user);
      await user.save();
      res.status(200).send(user.address);
    } catch (error) {
      console.log("Error:", error);
      res.status(400).send({ "msg": error.message });
    }
};
  
  

module.exports = { userSignup, userLogin, getUsers, addOrUpdatedAddress };