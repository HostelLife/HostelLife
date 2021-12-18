import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SearchBar } from "./SeachBar";
import { Link } from "react-router-dom";
import CardsProfile from "./CardProfile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import GoogleMapFunc from "./Map/GoogleMapFunc";

export default function EventProfilePage() {
  const [events, setEvents] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/events/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <Card className="text-center bg-dark bg-gradient text-light p-5 mt-5">
      <Card.Body>
        <SearchBar />
        <Card.Title>
          {" "}
          Select places to visit and meet new people who are visiting similar
          places...
        </Card.Title>
        <Card.Text className="mt-3">
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <div className="d-grid gap-2 d-flex flex-column bd-highlight mb-3">
          {events.map((event) => {
            return <CardsProfile event={event} />;
          })}
        </div>
      </Card.Body>
      <GoogleMapFunc />
    </Card>
  );
}
