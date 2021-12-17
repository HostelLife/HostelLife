import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//react-bootstrap node package installed

export default function AdminPage() {
  const [userEmail, setUserEmail] = useState("");
  const [hostelId, setHostelId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { userEmail, hostelId, checkInDate, checkOutDate };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="App d-flex flex-column align-items-center">
      <Form style={{ width: "500px" }} onSubmit={onSubmitForm}>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Guest Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Hostel ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter ID"
            value={hostelId}
            onChange={(e) => setHostelId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Check-In Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Check-Out Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
