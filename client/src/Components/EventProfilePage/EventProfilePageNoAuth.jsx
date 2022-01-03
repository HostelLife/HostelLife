import React from "react";
import Card from "react-bootstrap/Card";
import BackButton from "../BackButton/BackButton.jsx";
import { Link } from "react-router-dom";
import "./EventProfilePageNoAuth.css";
import "../WelcomePage/WelcomePage.css";

export default function EventProfilePageNoAuth() {
  return (
    <Card className="NoAuthCard">
      <div className="text-center p-2">
        <div className="d-flex flex-row justify-content-between">
          <Link to="/">
            <BackButton />
          </Link>
        </div>
        <h3 className="Big_Text">Please, Login To See This Page</h3>
      </div>
      <Card.Body className="text-center">
        <Link to="/">
          <button className="WelcomePage_button">LogIn Page</button>
        </Link>
      </Card.Body>
    </Card>
  );
}
