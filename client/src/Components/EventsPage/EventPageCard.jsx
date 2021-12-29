import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./EventPage.css";

function EventPageCard({ event }) {
  const { id, starttime, imagefilename, title } = event;

  return (
    <div
      className=" EventPageCard_main d-flex flex-column p-2"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <Link to={`/event/${id}`} style={{ textDecoration: "none" }}>
        <Card
          style={{ border: "none", width: "100%", backgroundColor: "#0D0D0D" }}
          className="d-flex flex-row EventPageCard"
        >
          <Card.Img
            style={{ width: "9rem", backgroundColor: "#0D0D0D" }}
            variant="top"
            src={`/images/${imagefilename}`}
            className="EventPageCard_image"
          />
          <Card.Body style={{ backgroundColor: "#0D0D0D" }}>
            <Card.Title
              className="title"
              style={{ backgroundColor: "#0D0D0D" }}
            >
              {title}
            </Card.Title>
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
