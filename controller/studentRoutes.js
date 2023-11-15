const express = require("express");
const router = express.Router();

const studentSchema = require("../model/studentSchema");

router.get("/", (req, res, next) => {
  //us of middleware function
  studentSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.post("/create-student", (req, res, next) => {
  //middleware funtion create to insert data from server to database
  //create-student is the link
  studentSchema.create(req.body, (err, data) => {
    //req.body is the req with data from front end ,
    //that takes server to data base ,

    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
  // console.log(req.body);
});
//route is written to delete the data the data
router.delete("/delete-student/:id", (req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

//route is written to capture the data
router
  .route("/update-student/:id")
  .get((req, res, next) => {
    studentSchema.findById(req.params.id, (err, data) => {
      if (err) {
        return next(err);
      } else {
        return res.json(data);
      }
    });
  })
  .put((req, res, next) => {
    studentSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, data) => {
        if (err) {
          return next(err);
        } else {
          return res.json(data);
        }
      }
    );
  });

router.post("/login", (req, res) => {
  const { email } = req.body;
  studentSchema.findOne({ email: email }).then((student) => {
    if (student) {
      if (student.email === email) {
        res.json("Login Successfull");
      } else {
        res.json("Email Incorrect");
      }
    } else {
      res.json("Record Not Found");
    }
  });
});
module.exports = router;
