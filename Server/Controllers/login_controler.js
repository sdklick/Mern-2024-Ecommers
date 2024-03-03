const usermodel = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const jwtkey = "mernecom";
const login = async (req, res) => {
  let reqdata = req.body;
  if (
    Object.keys(reqdata)[0] == "email" &&
    Object.keys(reqdata)[1] == "password"
  ) {
    let data = await usermodel.findOne(reqdata, { password: 0 });
    if (data) {
      jwt.sign({ data }, jwtkey, { expiresIn: "2h" }, (err, token) => {
        res.json({ data, auth: token });
      });
    } else {
      res.json(data);
    }
  } else {
    res.send("No user Found");
  }
};

module.exports = login;
