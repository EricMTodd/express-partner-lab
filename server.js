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


// Index Route
app.get("/characters/", (req, res) => {
	res.render("index.ejs", {
		"charactersArray": Characters
	});
});


// Delete Route
app.delete("/characters/:index", (req, res) => {
	Characters.splice(req.params.index, 1);
	console.log(Characters);
	res.redirect("/characters/");
});


app.listen(3000, () => {
	console.log("server.js is listening on port 3000");
});