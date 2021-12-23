import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsProfile from "./CardProfile.jsx";

export default function EventProfilePage() {
  const [events, setEvents] = useState([]);
  //getting the localStorage email
  const userInfo = JSON.parse(window.localStorage.getItem("userInfoKey"));
  const userEmailLocal = userInfo.email;
  console.log("User mail from local storage " + userEmailLocal);
  let { id } = useParams();

  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("");

  useEffect(() => {
    const url = `http://localhost:5000/events/${id}?userEmail=${userEmailLocal}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      {events.map((event) => {
        return <CardsProfile event={event} />;
      })}
    </div>
  );
}
