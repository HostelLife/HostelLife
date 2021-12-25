import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./EventPageCard.css";

function EventPageCard({ event }) {
  const { id, imagefilename, title } = event;
  // const reDirectUrl = `/events/visit_places/${title}`;
  return (
    <div className="EventPageCard_main">
      <Link
        to={`/event/${id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <Card
          style={{ width: "100%" }}
          className="d-flex flex-row EventPageCard"
        >
          <Card.Img
            style={{ width: "9rem" }}
            variant="top"
            src={`/images/${imagefilename}`}
            className="EventPageCard_image"
          />
          <Card.Body>
            <Card.Title style={{ width: "50%" }}>{title}</Card.Title>
            <Card.Text
              className="text-muted fs-5"
              style={{ fontSize: "14px" }}
            ></Card.Text>
          </Card.Body>
        </Card>
        {/* <Container className="d-flex flex-row EventPageCard">
          <Card.Img
            className="EventPageCard_image"
            variant="top"
            src={`/images/${imagefilename}`}
          />
          <Row>
            <Col className="EventPageCard_title">
              <h4>{title}</h4>
              <p className="text-muted fs-5" style={{ fontSize: "14px" }}>
                {starttime}
              </p>
            </Col>
          </Row>
        </Container> */}
      </Link>
    </div>
  );
}

export default EventPageCard;
