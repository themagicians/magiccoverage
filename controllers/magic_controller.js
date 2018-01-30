var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
	res.render("index");
});

// API Route to publish All Events
router.get("/api/events", function(req, res) {
	db.Events.findAll({}).then(function(dbEvents){
		res.json(dbEvents);
	});
});

router.get("/form", function(req, res) {
	res.render("addForm");
})

router.get("/events", function (req, res) {
	db.Events.findAll({
		include: [db.Rounds]
	}).then(function (dbEvents) {
		var hbsObject = {
				events: dbEvents
			};

		console.log(hbsObject);
		res.render("queryResponse", hbsObject);
	});
});

router.post("/events/create", function(req, res) {
	db.Events.create({
		coverage_provider: req.body.coverage_provider,
		event_sponsor: req.body.event_sponsor,
		event_name: req.body.event_name,
		event_date: req.body.event_date,
		format: req.body.format
	}).then(function(dbEvents) {
		
		console.log(dbEvents);
		res.render("/addForm");
	});
});

router.post("/events/rounds", function(req, res) {
	db.Rounds.create({
		round_number: req.body.round_number,
		event_name: req.body.event_name,
		player1_name: req.body.player1_name,
		player2_name: req.body.player2_name,
		player1_deck: req.body.player1_deck,
		player2_deck: req.body.player2_deck,
		coverage_link: req.body.coverage_link,
		EventId: req.body.EventId
		//GOING TO NEED/OR SEE THE ID OF EVENT SO THEY CAN MATCH UP......ONLY IF WE CAN'T MAKE THESE INTO ONE POST/CREATION
	}).then(function(dbRounds) {
		
		console.log(dbRounds);
		res.redirect("/");
	});
});

module.exports = router;