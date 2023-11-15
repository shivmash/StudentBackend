const mongoose = require("mongoose"); //installation of mongoose
const express = require("express"); //installation of express

const cors = require("cors"); //installation of cors -cross origin resource sharing

const studentRoutes = require("./controller/studentRoutes"); // initializing studentRoutes
const app = express(); //instantiation

mongoose.set("strictQuery", true); //to make entries case sensitive
const uri =
  "mongodb+srv://mashalkar01:shivshankar123@cluster0.v1p6oo9.mongodb.net/MyHighSchool";

mongoose.connect(uri); //to trigger connect event

const db = mongoose.connection; //to make connection with database

db.on("open", () => {
  console.log("Database Connected"); //to show the database is connected
});
db.on("error", (error) => {
  console.log("Error while connecting to database", error); // to show the error prompt
});
app.use(express.json());
app.use(cors()); //instantiating cors
app.use("/students", studentRoutes);
const port = 5000;
app.listen(port, () => {
  console.log("server listening on port", port); //listening on server port
});
