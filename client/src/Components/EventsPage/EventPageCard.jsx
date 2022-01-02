import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./EventPage.css";

function EventPageCard({ event }) {
  const { id, starttime, imagefilename, title } = event;

  return (
    <div
      className=" EventPageCard_main d-flex flex-column p-1 "
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <Link to={`/event/${id}`} style={{ textDecoration: "none" }}>
        <Card
          style={{ border: "none", width: "90%" }}
          className="bg-dark d-flex flex-row EventPageCard justify-content-center"
        >
          <Card.Img
            style={{ width: "9rem" }}
            variant="top"
            src={`/images/${imagefilename}`}
            className="EventPageCard_image"
          />
          <Card.Body>
            <Card.Title className="title">{title}</Card.Title>
            <Card.Text className="text-muted " style={{ fontSize: "15px" }}>
              {starttime}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default EventPageCard;
