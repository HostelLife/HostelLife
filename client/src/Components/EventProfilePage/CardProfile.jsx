import React from "react";
import Card from "react-bootstrap/Card";
import Map from "../Map/Map";
import "./CardProfile.css";
import BackButton from "../BackButton/BackButton.jsx";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";

function CardsProfile({ event, onClick }) {
  const {
    category,
    title,
    description,
    imagefilename,
    starttime,
    latitude,
    longitude,
    numberOfParticipents,
    isAlreadyJoining

  } = event;

  console.log(isAlreadyJoining);

  const position = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div>
      <Card
        className=" bg-light text-light d-flex justify-content-start p-1"
        style={{ border: "none" }}
      >
        <Link to={`/events/${category}`} className="ms-3">
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
              <Card.Title>{title}</Card.Title>
              {
                isAlreadyJoining &&  
                <AiFillStar
                style={{
                  height: "2rem",
                  width: "2rem",
                  color: "orange"
                }}
              />
              }            
            </div>

            <Card.Title>{starttime}</Card.Title>
            <p>
              <BsPerson className="PersonLogo" /> 
              <span className="total-participants"> {numberOfParticipents} </span> travellers joining
            </p>
            <Card.Text>{description}</Card.Text>
            
          {!isAlreadyJoining && 
          <Button
              style={{
                border: "none",
                borderRadius: "18px",
                marginBottom: "1rem",
              }}
              variant="success"
              onClick={onClick}
              className="CardProfile_button"
            >Join the Event
            </Button>
          }
            
            <Map position={position} />
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardsProfile;
