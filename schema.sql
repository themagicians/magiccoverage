-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS magic_db;
-- Create the database burgers_db and specified it for use.
CREATE DATABASE magic_db;
USE magic_db;

-- Create the table tasks.
CREATE TABLE events
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
    -- Primary Key set to ID --
	PRIMARY KEY (id)
);


CREATE TABLE rounds
(
    id int NOT NULL AUTO_INCREMENT,
    -- Round Number --
    round_number varchar(255),
    -- Event Name same as events --
    event_name varchar(255),
    -- URL to Match Coverage --
    coverage_link varchar(255),
    -- Foreign Key --
    Foreign KEY(event_name)
);

CREATE TABLE players
(
    id int NOT NULL AUTO_INCREMENT,
    -- Round Number --
    round_number varchar(255),
    -- Player --
    player_name varchar(255),
    -- Player's Deck Archtype --
    deck_name varchar(255),
    -- Primary Key --
    PRIMARY KEY(round_number)
);

CREATE TABLE decks
(
   id int NOT NULL AUTO_INCREMENT,
   -- Deck Name --
   deck_name varchar(255),
   -- Format --
   format varchar(255),
   PRIMARY KEY(deck_name)    
);