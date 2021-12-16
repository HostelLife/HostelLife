const secrets = require("./secrets.json");
const { Pool } = require("pg");
const pool = new Pool(secrets);

const api = () => {
  const postNewEvent = async (request, response) => {
    const newEvent = request.body;
    console.log(newEvent);
    const result = await pool.query(
      `INSERT INTO events (title, description, startTime, location, imageFileName, category)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [
        newEvent.title,
        newEvent.description,
        newEvent.startTime,
        newEvent.location,
        newEvent.imageFileName,
        newEvent.category,
      ]
    );
    const responseBody = { eventId: result.rows[0].id };
    return response.status(201).json({
      status: "Event Successfully created.",
      NewEventId: responseBody.eventId,
    });
  };

  const getEvents = async (request, response) => {
    const category = request.query.category;
    try {
      if (!category) {
        const result = await pool.query(`select * FROM events`); // show all events
        response.status(200).send(result.rows);
      } else {
        const lowerCasedCategory = category.toLowerCase();
        const query = `SELECT * FROM events WHERE category LIKE '${lowerCasedCategory}'`;
        console.log(query);
        const result = await pool.query(query); // show searched events

        response.status(200).send(result.rows);
      }
    } catch (err) {
      console.log(err);
      response.sendStatus(500);
    }
  };

  const getEventById = async (request, response) => {
    const eventId = request.params.eventId;
    const event = await pool.query(
      `select 
        *
        from events c
        where c.id = $1 `,
      [eventId]
    );
    return response.status(200).json(event.rows);
  };

  return {
    postNewEvent,
    getEvents,
    getEventById,
  };
};

module.exports = api;
