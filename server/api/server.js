const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// PROJECT IMPORTS
const webApi = require("./api.js");
const api = webApi();

app.get("/events", api.getEvents);
app.get("/events/:eventId", api.getEventById);
//post new event
app.post("/events", api.postNewEvent);

app.listen(PORT, () =>
  console.log(`HostelLife Server is up and running on port ${PORT}`)
);
