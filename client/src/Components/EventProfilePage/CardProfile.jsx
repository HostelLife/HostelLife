import React from "react";
import Card from "react-bootstrap/Card";
import Map from "../Map/Map";
import Button from "react-bootstrap/Button";
import "./CardProfile.css";
import OurButton from "../Badge/Badge.jsx";
import BackButton from "../BackButton/BackButton.jsx";
import { Link } from "react-router-dom";
import Heart from "../Heart/Heart.jsx";

function CardsProfile({ event }) {
  const {
    category,
    title,
    description,
    imagefilename,
    starttime,
    latitude,
    longitude,
  } = event;
  const position = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Link to={`/events/${category}`}>
          <BackButton />
        </Link>

        <Card.Img
          variant="top"
          src={`/images/${imagefilename}`}
          className="CardProfile_image"
        />

        <Card.Body className="text-dark">
          <Card className="CardProfile_container">
            <div className="d-flex justify-content-between d-block CardProfile_logos">
              <Button className="CardProfile_button mb-5" variant="success">
                Must See
              </Button>

              <Heart />
            </div>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{starttime}</Card.Title>

            <Card.Text>{description}</Card.Text>
            <OurButton content={" Access the Chat"} />
          </Card>

          <Map position={position} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardsProfile;
