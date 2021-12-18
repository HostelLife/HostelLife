import React from "react";
import Card from "react-bootstrap/Card";
import GoogleMapFunc from "./Map/GoogleMapFunc";
import Button from "react-bootstrap/Button";
import "./CardProfile.css";
import OurButton from "./OurButton";
// import { Link } from "react-router-dom";

function CardsProfile({ event }) {
  const { title, description, imagefilename, starttime } = event;
  const position = {
    lat: 41.4060244,
    lng: 2.1684095,
  };
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={`/images/${imagefilename}`}
          className="CardProfile_image"
        />

        <Card.Body className="text-dark">
          <Card className="CardProfile_container">
            <Button className="CardProfile_button" variant="success">
              Must See
            </Button>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{starttime}</Card.Title>

            <Card.Text>{description}</Card.Text>
            <OurButton content={" Access the Chat"} />
          </Card>

          <GoogleMapFunc position={position} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardsProfile;
