const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");
const Register = require("../models/Register");

router.get("/", (req, res) => {
  res.render("register", { title: "Business Registration Form" });
});
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newBusiness = new Register(req.body);
    await newBusiness.save();
    res.redirect("/register");
  } catch (error) {
    if(error.code ===11000){
      res.render("error", { title: "Error", msg:"You entered some duplicate values" });
      
    }
    console.error(error.code);
  }
});

// router.get("/dashboard", (req, res) => {
//   res.render("dashboard", {
//     title: "Registration form",
//     user: {
//       name: "Gabriel Ekodo",
//       age: 35,
//       active: true,
//       hobbies: ["Reading", "Travelling", "Swimming", "Playing piano"],
//     },
//     url: "https://gabrielekodo-task-manager-app-2022.netlify.app/",
//   });
// });

// router.get("/registrations", (req, res) => {
//   Registration.find()
//     .then((registrations) => {
//       res.render("index", { title: "Listing registrations", registrations });
//     })
//     .catch(() => {
//       res.send("Sorry! Something went wrong.");
//     });
// });

// // router.post("/", async (req, res) => {
// //   try {
// //     const registration = new Registration(req.body);
// //     await registration.save();
// //     res.redirect("registrations?alert=success");
// //     console.log(req.body);
// //   } catch (err) {
// //     res.status(400).render("form", {
// //       title: "Register Car Washer",
// //       routeName: "/",
// //       alert: "error",
// //     });
// //   }
// // });

module.exports = router;
