const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model("product", ProductSchema);
