import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardChat({ event }) {
  const { title } = event;
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Body className="text-dark">
          <Card className="CardProfile_container">
            <Card.Title>{title}</Card.Title>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardChat;
