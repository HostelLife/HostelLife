import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./EventPage.css";

import { AiFillStar } from "react-icons/ai";

import { format, parseISO } from "date-fns";


function EventPageCard({ event }) {
  const { id, starttime, imagefilename, title, isAlreadyJoining } = event;

  console.log(isAlreadyJoining);

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

            <div className="d-flex justify-content-between d-block">
              <div>
                <Card.Title className="title mx-3">{title}</Card.Title>
                <Card.Text className="text-muted " style={{ fontSize: "15px" }}>
                  {starttime}
                </Card.Text>
              </div>
              <AiFillStar className="EventPage_star" />
              {isAlreadyJoining && (
                <AiFillStar
                  className="EventPage_star"
                  style={{
                    height: "2rem",
                    width: "2rem",
                  }}
                />
              )}
            </div>

            <Card.Title className="title">{title}</Card.Title>
            <Card.Text className="text-muted " style={{ fontSize: "15px" }}>
              {format(parseISO(starttime), "EEEE, do MMM  - hh:mm a")}
            </Card.Text>

          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default EventPageCard;
