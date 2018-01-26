var db = require("../models");

module.exports = function(app) {
	app.get("/api/events", function(req, res) {
		db.Events.findAll({
			include: [db.Rounds]
		}).then(function(dbEvents) {
			res.json(dbEvents);
		});
	});

	app.get("/api/events/:eventName", function(req, res) {
		db.Events.findOne({
			where: {
				event_name: req.params.eventName
			},
			include: [db.Rounds]
		}).then(function(dbEvents) {
			res.json(dbEvents);
		});
	});

	app.post("/api/events", function(req, res) {
		//I'm not positive if rounds need to be included in this event creation
		db.Events.create(req.body).then(function(dbEvents) {
			res.json(dbEvents);
		});
	});

	app.delete("/api/events/:eventName", function(req, res) {
		db.Events.destroy({
			where: {
				event_name: req.params.eventName
			}
		}).then(function(dbEvents) {
			res.json(dbEvents);
		});
	});

};



