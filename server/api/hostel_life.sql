drop table if exists events;
drop table if exists users;
drop table if exists hostels;
drop table if exists bookings;

CREATE TABLE events (
  id        SERIAL PRIMARY KEY,
  title      VARCHAR(30) NOT NULL,
  description     VARCHAR(220),
  startTime   VARCHAR(120),
  location      VARCHAR(30),
  category 		VARCHAR(30) NOT NULL
);

CREATE TABLE users (
  id        SERIAL primary key,
  user_email VARCHAR (120) not null
);

CREATE TABLE hostels (
  id        SERIAL primary key,
  hostel_name VARCHAR (120) not null
);

CREATE TABLE bookings (
  user_id INT REFERENCES users(id),
  hostel_id INT REFERENCES hostels(id),
  activation_date DATE not null,
  deactivation_date DATE not null
);


INSERT INTO events (title, description, startTime, location, category) VALUES ('Sagrada famililia','Very beautiful','10:00am','somewhere', 'monument');
INSERT INTO events (title, description, startTime, location, category) VALUES ('Casa Batllo','Very beautiful','12:00pm','somewhere', 'monument');
INSERT INTO events (title, description, startTime, location, category) VALUES ('La Rambla','Very beautiful','3:00pm','somewhere', 'visit-places');
INSERT INTO events (title, description, startTime, location, category) VALUES ('Barceloneta','Very beautiful','6:00pm','somewhere', 'beach');

INSERT INTO users (user_email) VALUES ('user1@mail.com');
INSERT INTO users (user_email) VALUES ('user2@mail.com');
INSERT INTO users (user_email) VALUES ('user3@mail.com');
INSERT INTO users (user_email) VALUES ('user4@mail.com');


INSERT INTO hostels (hostel_name) VALUES ('Hostel One');
INSERT INTO hostels (hostel_name) VALUES ('Hostel Two');
INSERT INTO hostels (hostel_name) VALUES ('Hostel Three');
INSERT INTO hostels (hostel_name) VALUES ('Hostel Four');



drop table if exists messeges;


CREATE TABLE messeges (
    user_id   VARCHAR(30) NOT NULL,
    content   VARCHAR(220),
    timestamp VARCHAR(120),
    event_id   VARCHAR(30) NOT NULL
);