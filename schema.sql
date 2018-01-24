-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS magic_db;
-- Create the database burgers_db and specified it for use.
CREATE DATABASE magic_db;
USE magic_db;

-- Create the table tasks.
CREATE TABLE coverage
(
	id int NOT NULL AUTO_INCREMENT,
    -- This will hold our provider info likely Twitch or YouTube --
	coverage_source varchar(255),
    -- Grabs a time in the HH:MM:SS format to be included in our URL queries --
	vidtime TIME,
    -- Format refers to the tournament format --
    format varchar(255),
    -- Date of the Event that is being Covered --
	coverage_date DATE,
    -- Player in Seat One --
    player_1 varchar(255),
    -- Player in Seat Two --
    player_2 varchar(255),
    -- Stores the Colors of the Deck from search form checkboxes --
    deck_colors varchar(255),
    -- User Submitted Deck Title --
    deck_name varchar(255),
    
    
	PRIMARY KEY (id)
);
