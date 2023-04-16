const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const { productRouter } = require("./routes/product.route");
const { cartRouter } = require("./routes/cart.route");
const {adminRouter} = require("./routes/admin.route");
const { myOrdersRouter } = require("./routes/myOrders.route");

const app = express();

app.options("*", cors());
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/admin", adminRouter);
app.use("/myOrders", myOrdersRouter);


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to database");
    } catch (error) {
        console.log("Failed to connect to database !!");
        console.log(error.message);
    }
    console.log(`Server is running on port ${process.env.port}`);
});