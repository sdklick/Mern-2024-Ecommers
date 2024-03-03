const ProductModel = require("../Model/AddProductModel");
const addproduct = async (req, res) => {
  let data = new ProductModel(req.body);
  let result = await data.save();
  res.json(result);
};

module.exports = addproduct;
