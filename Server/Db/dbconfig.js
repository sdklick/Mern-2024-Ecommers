const mongoose = require("mongoose");

const connectDB = async (dburl) => {
  try {
    await mongoose.connect(dburl);
    console.log("database Connect success");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
