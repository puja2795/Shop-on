const { UserModel } = require("../model/user.model");
const { ProductModel } = require("../model/product.model");
const { AdminModel } = require("../model/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Admin Signup
const adminSignup = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body)

    try {
        const admin = await AdminModel.findOne({ email });
        if (!admin) {
            bcrypt.hash(password, 3, async (err, hash) => {
                if (err) {
                    res.status(400).send({ "msg": err.message });
                }
                else {
                    const newAdmin = new AdminModel({ name, email, password: hash });
                    await newAdmin.save();

                    res.status(200).send({ "msg": "Registration Successfull !!" });
                }
            });
        }
        else {
            res.status(400).send({ "msg": "Admin already exists. Please login." });
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send({ "msg": error.message });
    }
}

// Admin Login 
const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await AdminModel.findOne({ email });
        if (admin) {
            bcrypt.compare(password, admin.password, (err, result) => {
                if (result) {
                    res.status(200).send({ "msg": "Login Successful !!", "name": admin.name, "token": jwt.sign({ "adminID": admin._id }, "admin_signature") });
                }
                else {
                    res.status(400).send({ "msg": "Wrong password !!" });
                }
            })
        } else {
            res.status(400).send({ "msg": "Admin not found, Please Check your email !!" });
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }

}

//  Add new product
const addProduct = async (req, res) => {
    // Admin token check
    const payload = req.body;
    try {
        const newProd = new ProductModel({ ...payload });
        await newProd.save();
        res.status(200).send(newProd);
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

// Edit product details
const editProduct = async (req, res) => {
    // Admin token check
    const prodID = req.params.prodID;
    const payload = req.body;
    try {
        const product = await ProductModel.findByIdAndUpdate({ _id: prodID }, payload, { new: true });
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
    const prodID = req.params.prodID;
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
    const userID = req.params.userID;
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


module.exports = { editProduct, deleteProduct, deleteUser, addProduct, adminSignup, adminLogin }