var db = require("../models");

module.exports = function(app) {
	app.get("/api/rounds", function(req, res) {
		db.Rounds.findAll({
			include: [db.Events]
		}).then(function(dbRounds) {
			res.json(dbRounds);
		});
	});

	app.get("/api/:eventName/:roundNumber", function(req, res) {
		db.Rounds.findOne({
			where: {
				event_name: req.params.eventName,
				round_number: req.params.roundNumber
			},
			include: [db.Events]
		}).then(function(dbRounds) {
			res.json(dbRounds);
		});
	});

	app.post("/api/rounds", function(req, res) {
		db.Rounds.create(req.body).then(function(dbRounds) {
			res.json(dbRounds);
		});
	});

	app.delete("/api/:eventName/:roundNumber", function(req, res) {
		db.Rounds.destroy({
			where: {
				event_name: req.params.eventName,
				round_number: req.params.roundNumber
			}
		}).then(function(dbRounds) {
			res.json(dbRounds);
		});
	});
};