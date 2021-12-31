import React, { useState, useEffect } from "react";
import EventPageCard from "./EventPageCard.jsx";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton.jsx";
import { Link } from "react-router-dom";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  let { category } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/events?category=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error(error);
      });
  }, [category]);
  let categories = () => {
    if (category === "main_attraction") return "Main Attractions";
    else if (category === "beach") return "Beaches";
    else if (category === "hiking") return "Hiking Spots";
    else if (category === "biking") return "Biking Routes";
    else if (category === "shopping") return "Shops";
    else if (category === "food") return "Restaurants";
    else if (category === "party") return "Clubs & Bars";
  };
  return (
    <div
      style={{ backgroundColor: "#0D0D0D", width: "100%" }}
      className="d-flex flex-column p-2 justify-content-around"
    >
      <div
        className="d-flex flex-row p-2  text-center justify-content-around"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <Link to="/events">
          <BackButton />
        </Link>

        <h5 className="mx-5  pt-3 text-light">Must See {categories()} </h5>
        <div></div>
      </div>
      <p
        className=" text-center px-3 text-light"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        Plan your trip and meet new people!
      </p>
      <div
        className="d-flex flex-column p-2  text-center justify-content-start"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        {events.map((event, index) => {
          return (
            <EventPageCard
              event={event}
              header={event.header}
              explanation={event.explanation}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
