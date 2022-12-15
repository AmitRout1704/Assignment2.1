const register = require("../model/registerUser");

exports.registeruser = async (req, res) => {
  try {
    const data = await register.create(req.body);
    res.status(200).json({
      message: "user Register sucessfully",
      user: data,
    });
  } catch (error) {
    res.status(500).json({
      sucess: "some internal server error occured",
      message: error.message,
    });
  }
};

exports.varifyUsre = async (req, res, next) => {
  try {
    const user = await register.find({ email: req.body.email });
    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
      next();
    }
    if (req.body.password === user[0].password) {
      res.status(200).json({
        message: "login sucessfull",
        data: user,
      });
    } else {
      res.status(401).json({
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    res.status(500).json({
      sucess: "some internal server error occured",
      message: error.message,
    });
  }
};
