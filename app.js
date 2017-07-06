const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();
const homepageRoutes = require("./routes/index");
const cardRoutes = require("./routes/cards");
const mongoose = require('mongoose');

app.engine('mustache', mustache());
app.set("view engine", 'mustache');
app.set("layout", 'layout');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/cards');



app.use(homepageRoutes)
app.use(cardRoutes)

app.listen(3000, function() {
  console.log("App is live");
})
