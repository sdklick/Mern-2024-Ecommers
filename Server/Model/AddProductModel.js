const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  userid: String,
  company: String,
});

const productmodel = mongoose.model("products", productSchema);

module.exports = productmodel;
