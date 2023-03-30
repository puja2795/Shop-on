const { ProductModel } = require("../model/product.model");

const addAllProducts = async (req, res) => {

    const payload = req.body;
    try {
        const allData = await ProductModel.insertMany(payload)
            .then(docs => {
                console.log("Multiple documents inserted to Product collection");
                res.status(200).send({ "msg": "Multiple documents inserted to Product collection" })
            })
            .catch(error => {
                console.error(error);
            });

    } catch (error) {
        res.status(400).send({ "msg": err.message });
    }
}

module.exports = { addAllProducts };