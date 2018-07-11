console.log("server.js is running...");


// Global Variables
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const Characters = require("./models/characters");


// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));





app.listen(3000, () => {
	console.log("server.js is listening on port 3000");
});