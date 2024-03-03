const productmodel = require("../Model/AddProductModel");
const deleteproduct = async (req, res) => {
  let result = await productmodel.deleteOne({ _id: req.params.id });
  res.send(result);
};

module.exports = deleteproduct;
