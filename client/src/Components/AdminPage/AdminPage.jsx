import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./AdminPage.css";
import PopOver from "./PopOver";

export default function AdminPage() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [hostelId, setHostelId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const body = { userName, userEmail, hostelId, checkInDate, checkOutDate };
  const newErrors = {};
  if (!userName || userName === "") newErrors.userName = "Cannot be blanck!";
  else if (userName.length > 30) newErrors.userName = "Name is too long!";

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
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
            <Form.Group className="mb-3 mt-3" controlId="formUserName">
              <Form.Label className="text-light">Guest Name</Form.Label>
              <Form.Control
                style={{ borderRadius: "18px" }}
                type="text"
                placeholder="Enter Guest Name"
                value={userName}
                onChange={(e) => {
                  return setUserName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
              <Form.Label className="text-light">Guest Email</Form.Label>
              <Form.Control
                style={{ borderRadius: "18px" }}
                type="email"
                placeholder="Enter Guest Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
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
            <Form.Group className="mb-1" controlId="formBasicEmail">
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

            <PopOver userEmail={userEmail} userName={userName} />
          </Form>
        </div>
      </Card>
    </div>
  );
}
