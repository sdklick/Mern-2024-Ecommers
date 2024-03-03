const productmodel = require("../Model/AddProductModel");

const allproduct = async (req, res) => {
  let result = await productmodel.find();
  if (result.length > 0) {
    res.json(result);
  } else {
    res.send(false);
  }
};

module.exports = allproduct;
