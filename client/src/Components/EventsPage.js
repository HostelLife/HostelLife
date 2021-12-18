import React, { useState, useEffect } from "react";
import EventPageCard from "./EventPageCard";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
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

  return (
    <>
      <div className="d-flex flex-row p-2">
        <Link to="/events">
          <BackButton />
        </Link>

        <h5 className="mx-5  pt-3">Visit Beautiful Places</h5>
      </div>
      <p className=" text-center">
        Select places to visit and meet new people who are visiting similar
        places...
      </p>
      <div>
        {events.map((event) => {
          return <EventPageCard event={event} />;
        })}
      </div>
    </>
  );
}
