const ProductModel = require("../Model/AddProductModel");
const updateproduct = async (req, res) => {
  let result = await ProductModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
};
module.exports = updateproduct;
