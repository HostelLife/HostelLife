import React from "react";
import BackButton from "../BackButton/BackButton.jsx";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { BsCursor } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CardChat({ event, onClick }) {
  const { id, title } = event;

  return (
    <div className="bg-dark" style={{ height: "auto", padding: "1rem" }}>
      
      <Card className="d-flex flex-row bg-dark justify-content-between">
        <Link to={`/event/${id}`}>
          <BackButton />
        </Link>
        <p className="mt-4 mx-2 text-light">{title}</p>
        
      </Card>

      <Card className="chatPage-img mt-2" style={{ height: "10vh", backgroundColor: "#000" }}></Card>

    </div>
  );
}

export default CardChat;
