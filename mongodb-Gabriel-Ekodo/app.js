const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

//requiring the routes.

const registerroutes = require("./routes/register");

require("dotenv").config();
//instantiate the express server
const app = express();

//setting up mongoose
const config = require("./config/database");

//connect mongoose
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", function (err) {
  console.error(err);
});

//express sesssion
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

// views settings or configurations
app.set("view engine", "pug");
app.set("views", "./views");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession);

// routes

app.use("/register", registerroutes);

// handling non existing routes
app.get("*", (req, res) => {
  res.status(404).send("OOPS! WRONG ADDRESS");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
