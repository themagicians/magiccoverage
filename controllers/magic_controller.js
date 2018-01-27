var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
	db.Events.findAll({
		include: [db.Rounds]
	}).then(function (dbEvents) {
		var hbsObject = {
				events: dbEvents
			};
		console.log(hbsObject.events);
		res.json(hbsObject);
		res.render("index", hbsObject.events);
	});
});

module.exports = router;