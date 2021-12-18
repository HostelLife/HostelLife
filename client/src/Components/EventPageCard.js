import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./EventPageCard.css";

function EventPageCard({ event }) {
  const { id, imagefilename, title, starttime } = event;
  // const reDirectUrl = `/events/visit_places/${title}`;
  return (
    <div>
      <Link to={`/event/${id}`}>
        <Container className="d-flex flex-row EventPageCard">
          <Card.Img
            className="EventPageCard_image"
            variant="top"
            src={`/images/${imagefilename}`}
          />
          <Row>
            <Col className="EventPageCard_title">
              <Card.Title>{title}</Card.Title>
              <Card.Title className="text-muted fs-5">{starttime}</Card.Title>
            </Col>
          </Row>
        </Container>
      </Link>
    </div>
  );
}

export default EventPageCard;