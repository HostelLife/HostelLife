import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./AdminPage.css";
import { Link } from "react-router-dom";
import PopOver from "./PopOver";

export default function AdminPage() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [hostelId, setHostelId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { userName, userEmail, hostelId, checkInDate, checkOutDate };
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
    } catch (err) {
      //var printError = err.message;
      console.log(err.message);
    }
  };

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Card className="text-start bg-dark text-light d-flex flex-row justify-content-center AdminPage_Card">
        <div className="d-flex bg-dark flex-row justify-content-start p-2">
          <Form onSubmit={onSubmitForm}>
            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label className="text-light">User Name</Form.Label>
              <Form.Control
                style={{ borderRadius: "18px" }}
                type="text"
                placeholder="Enter User Name"
                value={userName}
                onChange={(e) => {
                  return setUserName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
              <Form.Label className="text-light">
                Guest Email Address
              </Form.Label>
              <Form.Control
                style={{ borderRadius: "18px" }}
                type="email"
                placeholder="Enter email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-light">Hostel ID</Form.Label>
              <Form.Control
                style={{ borderRadius: "18px" }}
                type="number"
                placeholder="Enter ID"
                value={hostelId}
                onChange={(e) => setHostelId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-light">Check-In Date</Form.Label>
              <Form.Control
                style={{ borderRadius: "18px" }}
                className="text-muted "
                type="date"
                placeholder="Enter date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-light">Check-Out Date</Form.Label>
              <Form.Control
                style={{ borderRadius: "18px" }}
                className="text-muted"
                type="date"
                placeholder="Enter date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </Form.Group>

            <div>
              <p>Print Error here</p>
            </div>

            <PopOver userEmail={userEmail} />
          </Form>
        </div>
      </Card>
    </div>
  );
}
