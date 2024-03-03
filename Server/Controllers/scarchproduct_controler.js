const ProductModel = require("../Model/AddProductModel");
const searchproduct = async (req, res) => {
  let result = await ProductModel.find({
    $or: [
      { name: { $regex: req.params.key, $options: "i" } },
      { price: { $regex: req.params.key, $options: "i" } },
      { category: { $regex: req.params.key, $options: "i" } },
      { company: { $regex: req.params.key, $options: "i" } },
    ],
  });
  res.send(result);
};

module.exports=searchproduct
