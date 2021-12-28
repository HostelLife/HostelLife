import React, { useState, useEffect } from "react";
import EventPageCard from "./EventPageCard.jsx";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton.jsx";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

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

  return (
    <>
      <div className="d-flex flex-row p-2  text-center justify-content-around">
        <Link to="/events">
          <BackButton />
        </Link>

        <h5 className="mx-5  pt-3">Must See {category} sites</h5>
        <div></div>
      </div>
      <p className=" text-center px-3">
        Select sites to visit and meet new people who are visiting together with
        you.
      </p>
      <div className="d-flex flex-column p-2  text-center justify-content-start">
        {events.map((event) => {
          return (
            <EventPageCard
              event={event}
              header={event.header}
              explanation={event.explanation}
            />
          );
        })}
      </div>
    </>
  );
}
