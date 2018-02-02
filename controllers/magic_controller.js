var express = require("express");

var router = express.Router();

var db = require("../models");

// Require Request
var request = require("request");

// Require for Magic Card Search 
const mtg = require("mtgsdk");

// Magic Card Search Route
router.get("/card/:card", function(req, res){
	// Store incoming card name
	var cardQuery = req.params.card;
	// API for magic card lookup
	var magicCardSearchURL = "https://api.magicthegathering.io/v1/cards?name="+cardQuery;
	// Make Request to API
	request(magicCardSearchURL, function(error, response, body){
		if (!error && response.statusCode === 200){
			console.log("This is the Body");
			console.log(body);
			var jsonData = JSON.parse(body);

			// Body comes back as JSON data card is an array of card matches and .name is the card name at that index
			console.log(jsonData.cards[0].name);

		};
	});

});

router.get("/", function(req, res) {
	res.render("index");
});

// API Route to publish All Events
router.get("/api/events", function(req, res) {
	db.Events.findAll({
		include: [{model: db.Rounds, as: 'Rounds'}],
		order: [[ {model: db.Rounds, as: 'Rounds'}, "round_number" ]]
	}).then(function(dbEvents){
		res.json(dbEvents);
	});
});

router.get("/event/form", function(req, res) {
	res.render("eventForm");
});

router.get("/event/search", function(req, res) {
	var mytext = req.query.mytext
	db.Events.findAll({
		where: {
			event_name: req.query.mytext
		},
		include: [db.Rounds]
	}).then(function(dbEvent) {
		var hbsObject = {
			events: dbEvent
		};
		console.log(hbsObject);
		res.render("searchQuery", hbsObject);
	});
});

router.get("/events", function (req, res) {
	db.Events.findAll({
		include: [{model: db.Rounds, as: 'Rounds'}],
		order: [[ {model: db.Rounds, as: 'Rounds'}, "round_number" ]]
	}).then(function (dbEvents) {
		// order dbEvents JSON from last to first item by event 
		dbEvents.sort(function (a, b){
			var dateA = new Date(a.event_date), dateB = new Date(b.event_date);
			return dateB - dateA
		});
		var hbsObject = {
				events: dbEvents
			};

		console.log(hbsObject);
		res.render("queryResponse", hbsObject);
	});
});

router.get("/round/form", function (req, res) {
	db.Events.findAll({
		include: [db.Rounds]
	}).then(function (dbEvents) {
		var hbsObject = {
				events: dbEvents
			};
		res.render("roundForm", hbsObject);
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
		
		res.render("/event/form");
	});
});

router.post("/events/rounds", function(req, res) {
	db.Rounds.create({
		round_number: req.body.round_number,
		player1_name: req.body.player1_name,
		player2_name: req.body.player2_name,
		player1_deck: req.body.player1_deck,
		player2_deck: req.body.player2_deck,
		coverage_link: req.body.coverage_link,
		EventId: req.body.EventId
	}).then(function(dbRounds) {
		
		console.log(dbRounds);
		res.redirect("/round/form");
	});
});

module.exports = router;