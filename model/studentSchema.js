const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstname: { type: "String" },
    lastname: { type: "String" },
    email: { type: "String" },
    contact: { type: "Number" },
    parentname: { type: "String" },
    parentcontact: { type: "Number" },
  },
  {
    collection: "Students",
  }
);

module.exports = mongoose.model("Students", studentSchema);
