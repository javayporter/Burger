var express = require("express");
var exphandbars = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", exphandbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on: http://localhost:" + PORT);
});