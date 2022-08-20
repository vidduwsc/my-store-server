const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const connectDB = require("./config/connectDB");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/product/uploads", express.static("uploads"));

app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
