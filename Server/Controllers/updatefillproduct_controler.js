const ProductModel = require("../Model/AddProductModel");
const updatefillproduct = async (req, res) => {
  let result = await ProductModel.findOne({ _id: req.params.id });
  res.send(result);
};

module.exports = updatefillproduct;
