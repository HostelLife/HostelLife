import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsProfile from "./CardProfile.jsx";

export default function EventProfilePage() {
  const [event, setEvent] = useState();
  //getting the localStorage email
  const userInfo = JSON.parse(window.localStorage.getItem("userInfoKey"));
  const userEmail = userInfo.email;
  console.log("User mail from local storage " + userEmail);
  let { id } = useParams();

  useEffect(() => {
    getEventData(id, userEmail).then((eventData) => setEvent(eventData));
  }, [id, userEmail]);

  const getEventData = async (eventId, userEmail) => {
    const response = await fetch(
      `http://localhost:5000/events/${eventId}?userEmail=${userEmail}`
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  };

  const onClick = async (event) => {
    event.preventDefault();

    const data = { userEmail: userEmail };

    const url = `http://localhost:5000/events/${id}/participant`;
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const eventData = await getEventData(id, userEmail);
    setEvent(eventData);
  };

  return <div>{event && <CardsProfile event={event} onClick={onClick} />}</div>;
}
