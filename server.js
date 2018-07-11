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


// New Route
app.get("/characters/new", (req, res) => {
	res.render("new.ejs");
});

app.post("/characters/", (req, res) => {
	Characters.push(req.body);
	console.log(Characters);
	res.redirect("/characters/");
});


// Show Route
app.get("/characters/:index", (req, res) => {
	res.render("show.ejs", {
		"character": Characters[req.params.index],
		"index": req.params.index
	});
});


// Delete Route
app.delete("/characters/:index", (req, res) => {
	Characters.splice(req.params.index, 1);
	console.log(Characters);
	res.redirect("/characters/");
});


// Edit Route
app.get("/characters/:index/edit", (req, res) => {
	res.render("edit.ejs", {
		"character": Characters[req.params.index],
		"index": req.params.index
	});
});

app.put("/characters/:index", (req, res) => {
	Characters[req.params.index] = req.body;
	res.redirect("/characters/");
	console.log(Characters);
});


app.listen(3000, () => {
	console.log("server.js is listening on port 3000");
});