const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cartID: ObjectId
}, {
    versionKey: false
})

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };