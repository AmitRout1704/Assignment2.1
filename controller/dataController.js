const user = require("../model/userModel");
const date = new Date();

exports.createUserData = async (req, res) => {
  try {
    const User = await user.create({
      Name: req.body.Name,
      data: req.body.token,
    });
    res.status(200).json({
      message: "Record created sucessfully",
      data: User,
    });
  } catch (error) {
    res.status(200).json({
      message: "Some error occured",
      error: error.message,
    });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const data = await user.find();
    res.status(200).json({
      message: "Date fetch sucessfully",
      sucess: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured",
      error: error.message,
    });
  }
};

exports.getUserByDate = async (req, res) => {
  try {
    const data = await user.find({ date: req.body.date });
    res.status(200).json({
      message: "Date fetch sucessfully",
      sucess: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured",
      error: error.message,
    });
  }
};
