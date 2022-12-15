const mongoose = require("mongoose");
const registerScheema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const register = new mongoose.model("register", registerScheema);

module.exports = register;
