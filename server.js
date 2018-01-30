
var express = require("express");
var bodyParser = require("body-parser");
require('dotenv').config();
const sequelize_fixtures = require("sequelize-fixtures");

var app = express();
var PORT = process.env.PORT || 8080;


var db = require("./models");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/magic_controller.js");

app.use("/", routes);
app.use("/create", routes);
app.use("/rounds", routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// Variable to load in Database Sample Data
var fixtures = require("./seed.js");
// Command to populate database with initial data
sequelize_fixtures.loadFixtures(fixtures, db).then(function(){
  console.log("Data Imported");
});