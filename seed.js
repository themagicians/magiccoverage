// Contains Sample Data for the Database to be used with Sequelize-Fixtures

var fixtures = [
    {
        "model": "Events",
        "data": {
            "coverage_provider": "Twitch",
            "event_sponsor": "Star City Games",
            "event_name": "SCG Open: Cincinnati",
            "event_date": "2017-07-15",
            "format": "Standard"
        }
    },
    {
        "model": "Rounds",
        "data": {
            "round_number": "Round 1",
            "event_name": "SCG Open: Cincinnati",
            "player1_name": "Robert Gray",
            "player2_name": "Jonathan Job",
            "player1_deck": "UR Prowess",
            "player2_deck": "Mono-Red Aggro",
            "coverage_link": "https://www.twitch.tv/videos/159327959?t=0h13m19s"
        }
    },
    {
        "model": "Rounds",
        "data": {
            "round_number": "Round 2",
            "event_name": "SCG Open: Cincinnati",
            "player1_name": "Jadine Klomparens",
            "player2_name": "Stephen Bacala",
            "player1_deck": "WU Monument",
            "player2_deck": "GB Energy",
            "coverage_link": "https://www.twitch.tv/videos/159327959?t=1h08m26s"
        }
    },
    {
        "model": "Rounds",
        "data": {
            "round_number": "Round 2(b)",
            "event_name": "SCG Open: Cincinnati",
            "player1_name": "John Pellman",
            "player2_name": "Adam Bowman",
            "player1_deck": "Sultai Delirium",
            "player2_deck": "Mono-Block Zombies",
            "coverage_link": "https://www.twitch.tv/videos/159327959?t=1h38m19s"
        }
    },
    {
        "model": "Rounds",
        "data": {
            "round_number": "Round 3",
            "event_name": "SCG Open: Cincinnati",
            "player1_name": "Time Mueller",
            "player2_name": "Todd Stevens",
            "player1_deck": "GB Energy",
            "player2_deck": "5 Color Planeswalkers",
            "coverage_link": "https://www.twitch.tv/videos/159327959?t=2h18m06s"
        }
    },
    {
        "model": "Rounds",
        "data": {
            "round_number": "Round 4",
            "event_name": "SCG Open: Cincinnati",
            "player1_name": "Samuel Ball",
            "player2_name": "Collins Mullen",
            "player1_deck": "Mardu Vehicles",
            "player2_deck": "Temur Emerge",
            "coverage_link": "https://www.twitch.tv/videos/159327959?t=3h22m12s"
        }
    },{
        "model": "Rounds",
        "data": {
            "round_number": "Round 5",
            "event_name": "SCG Open: Cincinnati",
            "player1_name": "Ben Wienburg",
            "player2_name": "Alexander Conn",
            "player1_deck": "WU Monument",
            "player2_deck": "BW Zombies",
            "coverage_link": "https://www.twitch.tv/videos/159327959?t=4h27m28s"
        }
    },{
        "model": "Rounds",
        "data": {
            "round_number": "Round 5(b)",
            "event_name": "SCG Open: Cincinnati",
            "player1_name": "Cory Dissinger",
            "player2_name": "Forrest Kamperman",
            "player1_deck": "Sultai Seasons Past",
            "player2_deck": "Temur Emerge",
            "coverage_link": "https://www.twitch.tv/videos/159327959?t=5h00m58s"
        }
    }
];

module.exports = fixtures;