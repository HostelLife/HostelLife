const secrets = require("./secrets.json");
const { Pool } = require("pg");
//const { faCommentsDollar } = require("@fortawesome/free-solid-svg-icons");
const res = require("express/lib/response");
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
        //console.log(query);
        const result = await pool.query(query); // show searched events

        response.status(200).send(result.rows);
      }
    } catch (err) {
      console.log(err);
      response.sendStatus(500);
    }
  };

  ///---modifying ---//

  const getEventById = async (request, response) => {
    try {
      const userEmail = request.query.userEmail;
      const eventId = request.params.eventId;

      const getEveentQueryResponse = await pool.query(
        `select * from events c where c.id = $1 `,
        [eventId]
      );
      const event = getEveentQueryResponse.rows[0];

      const getTotalParticipantsQueryResponse = await pool.query(
        `select COUNT(*) from participants p where p.event_id = $1`,
        [eventId]
      );
      const participantsCount = getTotalParticipantsQueryResponse.rows[0].count;

      let userIsJoining = false;

      if (userEmail) {
        const userIdQueryResponse = await pool.query(
          `select u.id from users u where u.user_email = $1`,
          [userEmail]
        );
        const user = userIdQueryResponse.rows[0];

        if (user) {
          const userId = user.id;

          const findUserIdQuery = `select *
    from  participants p 
    where p.user_id = $1 
    and   p.event_id = $2`;
          const getParticipantsQueryResponse = await pool.query(
            findUserIdQuery,
            [userId, eventId]
          );

          userIsJoining = getParticipantsQueryResponse.rows.length > 0;
        }
      }
      return response.status(200).json({
        ...event,
        numberOfParticipents: participantsCount,
        isAlreadyJoining: userIsJoining,
      });
    } catch (error) {
      console.log(error);
    }
  };

  ///////////////////////////////////////////////////////////////
  // const  isCurrUserParticipating = async (req , res)=> {
  //   const userEmail = req.query.userEmail;

  //   const userIdQuery = await pool.query(
  //     `select u.id from users u where u.user_email = $1`, [userEmail]
  //   );
  //     console.log(userIdQuery.rows);
  //   res.status(400).send("ok");
  // }

  const postNewMessege = async (request, response) => {
    const newMessege = request.body;
    const currentTme = new Date().toLocaleString();

    const result = await pool.query(
      `INSERT INTO messages (user_id, event_id, content, time_stamp)
        VALUES ($1, $2, $3, $4) RETURNING user_id`,
      [newMessege.user_id, newMessege.event_id, newMessege.content, currentTme]
    );

    const responseBody = { messegeId: result.rows[0].id };
    return response.status(201).json({
      status: "messege Successfully created.",
      newMessegeId: responseBody.messegeId,
      time: currentTme,
    });
  };

  //------//

  const getMessagesByEventId = async (req, res) => {
    try {
      const eventId = req.query.event;
      const result = await pool.query(
        `SELECT * FROM messages m WHERE m.event_id=$1`,
        [eventId]
      );
      const resultArr = result.rows;
      res.status(200).send(resultArr);
    } catch (err) {
      console.log(err);
    }
  };

  const postNewUserBooking = async (request, response) => {
    try {
      const newBooking = request.body;
      const { userName, userEmail, hostelId, checkInDate, checkOutDate } =
        newBooking;

      console.log(userName);

      const emailQueryResult = await pool.query(
        `select u.id from users u where u.user_email = $1`,
        [userEmail]
      );
      const isEmailExsist = emailQueryResult.rows.length > 0;
      if (!userName) {
        return response.status(400).json({
          status: "User name is requied.",
        });
      } else if (!isEmailExsist) {
        const createNewUser = await pool.query(
          `INSERT INTO users (user_name, user_email) VALUES ($1, $2) returning id`,
          [userName, userEmail]
        );

        const newUserId = createNewUser.rows[0].id;

        const result = await pool.query(
          `INSERT INTO bookings (
        user_id, 
        hostel_id, 
        activation_date, 
        deactivation_date)
        VALUES ($1, $2, $3, $4) returning id`,
          [newUserId, hostelId, checkInDate, checkOutDate]
        );

        return response.status(201).json({
          status: "New user and booking has created.",
          userId: newUserId,
          bookingId: result.rows[0].id,
        });
      } else if (isEmailExsist) {
        return response.status(400).json({
          checkEmail: "User already exsist.",
        });
      }
    } catch (error) {
      console.log(error);
      response
        .status(400)
        .send(
          `Please ckeck your informations. Yor have the following issue ${error}`
        );
    }
  };

  // parameters (event_id, user_email)
  const addParticipantToEvent = async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const userEmail = req.body.userEmail;

      const queryResult = await pool.query(
        `select u.id from users u where u.user_email=$1`,
        [userEmail]
      );
      if (!eventId || !userEmail) {
        return res.status(400).send("Either event id or user email is empty");
      }

      const registerResult = queryResult.rows[0];

      if (!registerResult) {
        return res.status(400).send("Email address is not registered yet");
      }

      const userId = queryResult.rows[0].id;

      const insertNewQuery = `insert into participants (event_id, user_id) values ($1, $2) returning id`;
      await pool.query(insertNewQuery, [eventId, userId]);
      res.status(200).send("Participant is Created!");
    } catch (err) {
      return res
        .status(400)
        .send("Email address is already exist in the following event");
    }
  };

  // delete participant from en event
  const deleteParticipantFromEvent = async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const userEmail = req.body.user_email;

      const emailQuery = `select u.id from users u where u.user_email=$1`;
      const findEmail = await pool.query(emailQuery, [userEmail]);

      const userId = findEmail.rows[0].id;

      const deleteQuery = `delete from participants where event_id=$1 and user_id=$2`;
      await pool.query(deleteQuery, [eventId, userId]);
      res.status(200).send("Participant is deleted");
    } catch (err) {
      console.log("err");
    }
  };

  return {
    postNewEvent,
    getEvents,
    getEventById,
    postNewMessege,
    postNewUserBooking,
    getMessagesByEventId,

    addParticipantToEvent,

    //isCurrUserParticipating

    deleteParticipantFromEvent,
  };
};

module.exports = api;
