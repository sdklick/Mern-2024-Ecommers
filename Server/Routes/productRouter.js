const express = require("express");
const productrouter = express.Router();
const addproduct = require("../Controllers/addproduct_controler");
const allproduct = require("../Controllers/allproduct_controler");
const deleteproduct = require("../Controllers/deleteproduct_controler");
const updatefillproduct = require("../Controllers/updatefillproduct_controler");
const updateproduct = require("../Controllers/updateproduct_controler");
const searchproduct = require("../Controllers/scarchproduct_controler");

productrouter.post("/addproduct", addproduct);
productrouter.get("/allproduct", allproduct);
productrouter.delete("/deleteproduct/:id", deleteproduct);
productrouter.get("/updateget/:id", updatefillproduct);
productrouter.put("/updateproduct/:id", updateproduct);
productrouter.get("/search/:key", searchproduct);




module.exports = productrouter;
