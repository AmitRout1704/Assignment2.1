const mongoose = require("mongoose");
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;
console.log(currentDate); // "17-6-2022"

const userScheema = new mongoose.Schema({
  Name: {
    type: String,
  },
  data: [
    {
      number: {
        type: Number,
      },
      tokenNo: {
        type: Number,
      },
    },
  ],
  date: {
    type: String,
    default: currentDate,
  },
});
const user = new mongoose.model("user", userScheema);
module.exports = user;
