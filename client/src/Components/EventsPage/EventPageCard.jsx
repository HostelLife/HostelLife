import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./EventPage.css";

function EventPageCard({ event }) {
  const { id, starttime, imagefilename, title } = event;

  return (
    <div className="EventPageCard_main">
      <Link
        to={`/event/${id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <Card
          style={{ border: "none", width: "100%" }}
          className="d-flex flex-row EventPageCard "
        >
          <Card.Img
            style={{ width: "9rem" }}
            variant="top"
            src={`/images/${imagefilename}`}
            className="EventPageCard_image"
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
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
