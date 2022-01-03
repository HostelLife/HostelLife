import React from "react";
import Card from "react-bootstrap/Card";
import Map from "../Map/Map";
import "./CardProfile.css";
import BackButton from "../BackButton/BackButton.jsx";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { format, parseISO } from "date-fns";

function CardsProfile({ event, onJoinClick, onCancelClick }) {
  const {
    id,
    category,
    title,
    description,
    imagefilename,
    starttime,
    latitude,
    longitude,
    numberOfParticipents,
    isAlreadyJoining,
  } = event;

  console.log(isAlreadyJoining);

  const position = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div className=" bg-dark text-light d-flex justify-content-center">
      <Card
        className=" bg-dark text-light d-flex justify-content-center"
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

        <Card.Body className="text-light">
          <Card className="CardProfile_container bg-dark">
            <div className="d-flex justify-content-between d-block CardProfile_logos">
              <Card.Title>{title}</Card.Title>
              {isAlreadyJoining && (
                <AiFillStar
                  style={{
                    height: "2rem",
                    width: "2rem",
                    color: "orange",
                  }}
                />
              )}
            </div>

            <Card.Title>
              {format(parseISO(starttime), "EEEE, do MMM - hh:mm a")}
            </Card.Title>
            <p>
              <BsPerson className="PersonLogo" />
              <span className="total-participants">
                {" "}
                {numberOfParticipents}{" "}
              </span>{" "}
              travellers joining
            </p>
            <Card.Text>{description}</Card.Text>

            {!isAlreadyJoining && (
              <Button
                style={{
                  border: "none",
                  borderRadius: "18px",
                  marginBottom: "1rem",
                }}
                variant="success"
                onClick={onJoinClick}
                className="CardProfile_button"
              >
                Join the Event
              </Button>
            )}
            <div className="d-flex justify-content-between">
              {isAlreadyJoining && (
                <Button
                  style={{
                    border: "none",
                    borderRadius: "18px",
                    marginBottom: "1rem",
                  }}
                  variant="success"
                  onClick={onCancelClick}
                  className="CardProfile_button"
                >
                  Cancel the Event
                </Button>
              )}
              {isAlreadyJoining && (
                <Link to={`/event/${id}/chat`}>
                  <Button
                    style={{
                      border: "none",
                      borderRadius: "18px",
                      marginBottom: "1rem",
                      width: "5rem",
                    }}
                    variant="success"
                    className="CardProfile_button"
                  >
                    Chat
                  </Button>
                </Link>
              )}
            </div>

            <Map position={position} />
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardsProfile;
