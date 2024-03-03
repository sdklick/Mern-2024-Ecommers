const usermodel = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const jwtkey = "mernecom";
const signup = async (req, res) => {
  let reqdata = req.body;
  let data = new usermodel(req.body);
  let result = await data.save();
  let userdata = await usermodel.findOne(reqdata, { password: 0 });

  if (userdata) {
    jwt.sign({ userdata }, jwtkey, { expiresIn: "2h" }, (err, token) => {
      res.json({ data: userdata, auth: token });
    });
  } else {
    res.json(userdata);
  }
};

module.exports = signup;
