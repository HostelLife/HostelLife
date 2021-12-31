import React from "react";
import BackButton from "../BackButton/BackButton.jsx";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { BsCursor } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import SendButton from "./SendButton.jsx";

function CardChat({ event, onClick }) {
  const { id, title } = event;

  return (
    <div className="bg-dark" style={{ height: "auto", padding: "1rem" }}>
      <Card className="d-flex flex-row bg-dark justify-content-between">
        <Link to={`/event/${id}`}>
          <BackButton />
        </Link>
        <p className="mt-4 mx-2 text-light">{title}</p>

        
        <div></div>
      </Card>
      <h2 className="test-white" >this  is cardChat</h2>

      <Card className="chatPage-img" style={{ height: "10vh", backgroundColor: "#000" }}></Card>

      <Form className="d-flex flex-row">
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" />
        </Form.Group> */}

        <Button
          style={{ backgroundColor: "transparent", border: "none" }}
          className="d-flex"
        >
          {/* <SendButton /> */}
        </Button>
      </Form>
    </div>
  );
}

export default CardChat;
