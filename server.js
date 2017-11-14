//Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

//Express set up
let app = express();
let PORT = process.env.PORT || 8080;

//Sets express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Routes
app.use(express.static('app'));
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Starts server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
