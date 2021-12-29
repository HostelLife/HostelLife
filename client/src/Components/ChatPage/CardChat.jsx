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
    <>
      <Card className="d-flex flex-row">
        <Link to={`/event/${id}`}>
          <BackButton />
        </Link>
        <p className="mt-4 mx-2">{title}</p>
      </Card>

      <Form className="d-flex flex-row">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" />
        </Form.Group>
        <Button>
          <BsCursor className="m-2" onClick={onClick} />
        </Button>
      </Form>
    </>
  );
}

export default CardChat;
