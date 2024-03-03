const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtkey = "mernecom";
const cors = require("cors");
const connectDB = require("./Db/dbconfig");
const userrouter = require("./Routes/userRouter");
const productrouter = require("./Routes/productRouter");
const PORT = 2000;
const dbconnecturl = "mongodb://127.0.0.1:27017/Mernecom";
connectDB(dbconnecturl);

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/user", userrouter);
app.use("/product", productrouter);

app.listen(PORT, () => {
  console.log("server Start");
});
