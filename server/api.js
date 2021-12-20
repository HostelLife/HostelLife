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


  const postNewMessege = async (request, response) => {
    const newMessege = request.body;
    const currentTme = new Date().toLocaleString();
   
    const result = await pool.query(
      `INSERT INTO messages (user_id, event_id, content, times_tamp)
        VALUES ($1, $2, $3, $4) RETURNING user_id`,
      [
        newMessege.user_id,
        newMessege.event_id,
        newMessege.content,
        currentTme 
      ]
    );
    const responseBody = { messegeId: result.rows[0].id };
    return response.status(201).json({
      status: "messege Successfully created.",
      newMessegeId: responseBody.messegeId,
      time: currentTme
    });
  };

  ////////////////

  const postNewUserBooking = async (request, response) => {
    const newBooking = request.body;
    console.log(newBooking);
    //still need to fix this query
    // const userID = await pool.query(
    //   "SELECT id from users where user_email=$1",
    //   [newBooking.userEmail]
    // );
    const result = await pool.query(
      `INSERT INTO bookings (
        user_id, 
        user_email, 
        hostel_id, 
        activation_date, 
        deactivation_date)
        VALUES ($1, $2, $3, $4, $5)`,
      [
        // userID,
        newBooking.user_id,
        newBooking.user_email,
        newBooking.hostel_id,
        newBooking.activation_date,
        newBooking.deactivation_date
      ]
    );
    //const responseBody = { Newuserid: result.rows[0].user_id };
    return response.status(201).json({
      status: "User Activation Successful.",
      //NewBooking: responseBody.userEmail,
    });
  };

  return {
    postNewEvent,
    getEvents,
    getEventById,
    postNewMessege,
    postNewUserBooking
  };
};

module.exports = api;
