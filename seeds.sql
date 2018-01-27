-- Starting Records for magic_db
USE magic_db;
INSERT INTO events (coverage_provider, event_sponsor, event_name, event_date, format) VALUES ("Twitch", "Star City Games", "Star City Games Open Series: Cincinnati", "2017-07-15", "Standard");
INSERT INTO rounds (round_number, event_name, coverage_link) VALUES ("Round 1", "Star City Games Open Series: Cincinnati", "https://www.twitch.tv/videos/159327959?t=0h13m19s");
INSERT INTO players (round_number, player_name, player_deck) VALUES ("Round 1", "Robert Gray", "UR Prowess");
INSERT INTO players (round_number, player_name, player_deck) VALUES ("Round 1", "Jonathan Job", "Mono-Red Aggro");
INSERT INTO decks (deck_name, format) VALUES ("UR Prowess", "Standard");
INSERT INTO decks (deck_name, format) VALUES ("Mono-Red Aggro", "Standard");