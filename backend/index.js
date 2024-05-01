const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const PORT = 4000;
const Product = require("./schema");
const MONGO_URI =
  "mongodb+srv://wwwamanko12345:1234@cluster0.zuls9yg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
const morgan = require("morgan");
app.listen(PORT, () => {
  console.log("🔥 server running on port : ", PORT);
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("📔 Database connected ok!");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.post("/product", async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    if (!name || !quantity || !price)
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    const product = await Product.create({
      name,
      quantity,
      price,
    });

    return res.status(201).json({
      success: true,
      product: product,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "something went wrong" });
  }
});

app.get("/fetch/products", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ success: true, products: products });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "something went wrong" });
  }
});
