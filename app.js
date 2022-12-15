const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const path=require('path')


app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

const donationRoute = require("./routes/userRoute");
app.use("/api/v1", donationRoute);

app.use(express.static(path.join(__dirname,'./frontend/my-app/build')))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/my-app/build/index.html"));
  });

module.exports = app;
