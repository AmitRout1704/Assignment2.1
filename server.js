const app = require("./app");

app.listen(4000, () => {
  console.log("Server running on prot 4000");
});

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://amitroutard:amitroutard@cluster0.hg8l1qm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((error) => {
    console.log(error);
  });
