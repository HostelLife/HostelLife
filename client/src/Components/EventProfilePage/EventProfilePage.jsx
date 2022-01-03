import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsProfile from "./CardProfile.jsx";

export default function EventProfilePage() {
  const [event, setEvent] = useState();
  //getting the localStorage email
  const userInfo = JSON.parse(window.localStorage.getItem("userInfoKey"));

  let userEmail;
  if (userInfo) {
    userEmail = userInfo.email;
  }

  const { id } = useParams();

  useEffect(() => {
    getEventData(id, userEmail).then((eventData) => setEvent(eventData));
  }, [id, userEmail]);

  const getEventData = async (eventId, userEmail) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/events/${eventId}?userEmail=${userEmail}`
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  };

  const onJoinClick = async (event) => {
    event.preventDefault();

    const data = { userEmail: userEmail };
    if (userEmail === null) {
      console.log("No user Data");
      alert("User Not Registered");
    }

    const url = `${process.env.REACT_APP_API_BASE_URL}/events/${id}/participant`;
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

  const onCancelClick = async (event) => {
    event.preventDefault();

    const data = { userEmail: userEmail };
    const url = `${process.env.REACT_APP_API_BASE_URL}/events/${id}/participant`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const eventData = await getEventData(id, userEmail);
    setEvent(eventData);
  };

  return (
    <div>
      {event && (
        <CardsProfile
          event={event}
          onJoinClick={onJoinClick}
          onCancelClick={onCancelClick}
        />
      )}
    </div>
  );
}
