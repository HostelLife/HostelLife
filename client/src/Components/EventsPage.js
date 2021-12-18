import React, { useState, useEffect } from "react";
import EventPageCard from "./EventPageCard";
import { useParams } from "react-router-dom";
import { SearchBar } from "./SeachBar";
import Button from "react-bootstrap/esm/Button";

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
      <div>
        <h5 className=" text-center pt-5">Visit Beautiful Places</h5>
        <p className=" text-center">
          Select places to visit and meet new people who are visiting similar
          places...
        </p>
        <div>
          {events.map((event) => {
            return <EventPageCard event={event} />;
          })}
        </div>
      </div>
    </>
  );
}
