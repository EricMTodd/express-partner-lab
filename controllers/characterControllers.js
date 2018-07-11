console.log("characterControllers.js is running...");

const express = require("express");
const router = express.Router();
const Characters = require("../models/characters");


// Index Route
router.get("/", (req, res) => {
	res.render("index.ejs", {
		"charactersArray": Characters
	});
});


// New Route
router.get("/new", (req, res) => {
	res.render("new.ejs");
});

router.post("/", (req, res) => {
	Characters.push(req.body);
	console.log(Characters);
	res.redirect("/characters/");
});


// Show Route
router.get("/:index", (req, res) => {
	res.render("show.ejs", {
		"character": Characters[req.params.index],
		"index": req.params.index
	});
});


// Delete Route
router.delete("/:index", (req, res) => {
	Characters.splice(req.params.index, 1);
	console.log(Characters);
	res.redirect("/characters/");
});


// Edit Route
router.get("/:index/edit", (req, res) => {
	res.render("edit.ejs", {
		"character": Characters[req.params.index],
		"index": req.params.index
	});
});

router.put("/:index", (req, res) => {
	Characters[req.params.index] = req.body;
	res.redirect("/characters/");
	console.log(Characters);
});


module.exports = router;