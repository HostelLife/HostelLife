const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// PROJECT IMPORTS
const webApi = require("./api.js");
const api = webApi();

//get new events
//app.get("/events", api.getNewEvent);

// get specific event
app.get("/events", api.getSpecificEvent);

//post new event
app.post(`/events`, api.postNewEvent);

app.listen(PORT, () =>
  console.log(`HostelLife Server is up and running on port ${PORT}`)
);
