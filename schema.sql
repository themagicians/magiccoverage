-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS magic_db;
-- Create the database burgers_db and specified it for use.
CREATE DATABASE magic_db;
USE magic_db;

-- Create the table tasks.
CREATE TABLE coverage
(
	id int NOT NULL AUTO_INCREMENT,
    -- This will hold our provider either Twitch or YouTube --
	coverage_provider varchar(255),
    -- Event Sponsor: Channel Fireball, Wizards of the Coast, Star City Games --
    event_sponsor varchar(255),
    -- Event Name: ex. Grand Prix Dublin or SCG Open: Milwaukee --
    event_name varchar(255),
    -- Date the event was held --
    event_date DATE,
    -- Format refers to the tournament format --
    format varchar(255),
    -- Date of the Event that is being Covered --
	coverage_date DATE,
    -- Stores the Colors of the Deck from search form checkboxes --
    deck_colors varchar(255),
    -- User Submitted Deck Title --
    deck_name varchar(255),
    -- URL to Match Coverage --
    coverage_link varchar(255),
    -- Player in Seat One --
    player_1_name varchar(255),
    -- Player 1 Deck Name --
    player_1_deck varchar(255),
    -- Player in Seat Two --
    player_2_name varchar(255),
    -- Player 2 Deck Name --
    player_2_deck,
    -- Primary Key set to ID --
	PRIMARY KEY (id)
);

-- Thoughts for maybe breaking out a table for each event with a foreign key --
-- Table for players that holds the deck info?  --
CREATE TABLE events
(
    -- URL to Match Coverage --
    coverage_link varchar(255),
    -- Player in Seat One --
    player_1 varchar(255),
    -- Player in Seat Two --
    player_2 varchar(255),
    -- Foreign Key --

);
