const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// PROJECT IMPORTS

app.use(cors());
app.use(express.json());

const webApi = require("./api.js");
const api = webApi();

app.get("/events", api.getEvents);
app.get("/events/:eventId", api.getEventById);

//app.get("/events/:eventId", api.isCurrUserParticipating);

app.get("/messages", api.getMessagesByEventId);

//post new event
app.post("/events", api.postNewEvent);
app.post("/messages", api.postNewMessege);
app.post("/users", api.postNewUserBooking);

//post participant with eventId
app.post("/events/:eventId/participant", api.addParticipantToEvent);
app.delete("/events/:eventId/participant", api.deleteParticipantFromEvent);

app.listen(PORT, () =>
  console.log(`HostelLife Server is up and running on port ${PORT}`)
);
