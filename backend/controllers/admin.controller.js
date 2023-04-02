const { UserModel } = require("../model/user.model");
const { ProductModel } = require("../model/product.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Admin Signup
const adminSignup = async(req,res) => {
    
}

// Admin Login 
const adminLogin = async(req,res) => {

}

// Edit product details
const editProduct = async (req, res) => {
    // Admin token check
    const { prodID } = req.params;
    const payload = req.body;
    try {
        const product = await ProductModel.findByIdAndUpdate({ _id: prodID }, payload, {
            new: true,
        });
        if (!product) {
            return res.status(404).send({ msg: "Product not found" });
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    // Admin token check
    const { prodID } = req.params;
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete({ _id: prodID });
        if (!deletedProduct) {
            return res.status(404).send({ msg: "Product not found" });
        }
        const products = await ProductModel.find();
        res.status(200).send(products.filter(product => product._id.toString() !== prodID));
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
}

// Delete a user
const deleteUser = async (req, res) => {
    // Admin token check
    const { userID } = req.params;
    try {
        let deletedUser = await UserModel.findByIdAndDelete({ _id: userID });
        if (!deletedUser) {
            return res.status(404).send({ msg: "User not found" });
        }
        let userList = await UserModel.find();
        res.status(200).send({ msg: "User deleted successfully", userList });
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}


module.exports = { editProduct, deleteProduct, deleteUser }