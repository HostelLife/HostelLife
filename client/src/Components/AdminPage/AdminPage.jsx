import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./AdminPage.css";
import { Link } from "react-router-dom";

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
    <Card className="text-start bg-light text-light d-flex flex-row justify-content-center AdminPage_Card">
      <div className="d-flex flex-row justify-content-start p-2">
        <Form onSubmit={onSubmitForm}>
          <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
            <Form.Label className="text-dark ">Guest Email Address</Form.Label>
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
            <Form.Label className="text-dark">Hostel ID</Form.Label>
            <Form.Control
              style={{ borderRadius: "18px" }}
              type="number"
              placeholder="Enter ID"
              value={hostelId}
              onChange={(e) => setHostelId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-dark">Check-In Date</Form.Label>
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
            <Form.Label className="text-dark">Check-Out Date</Form.Label>
            <Form.Control
              style={{ borderRadius: "18px" }}
              className="text-muted"
              type="date"
              placeholder="Enter date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </Form.Group>
          <Link to={`/`}>
            <Button
              className="AdminPage_SubmitButton"
              variant="primary"
              type="submit"
              style={{ borderRadius: "18px" }}
            >
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </Card>
    // <Card className="text-center bg-light text-light d-flex flex-row justify-content-center">
    //   <div className="d-flex flex-row justify-content-start p-2">
    //     <Form onSubmit={onSubmitForm}>
    //       <Form.Group controlId="formBasicEmail">
    //         <Form.Label style={{ color: "#000" }}>
    //           Guest Email Address
    //         </Form.Label>
    //         <Form.Control
    //           type="email"
    //           placeholder="Enter email"
    //           value={userEmail}
    //           onChange={(e) => setUserEmail(e.target.value)}
    //         />
    //         ....
    //         {/* <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text> */}
    //       </Form.Group>
    //       <Form.Group controlId="formBasicEmail">
    //         <Form.Label style={{ color: "#000" }}>Hostel ID</Form.Label>
    //         <Form.Control
    //           type="number"
    //           placeholder="Enter ID"
    //           value={hostelId}
    //           onChange={(e) => setHostelId(e.target.value)}
    //         />
    //       </Form.Group>
    //       <Form.Group controlId="formBasicEmail">
    //         <Form.Label style={{ color: "#000" }}>Check-In Date</Form.Label>
    //         <Form.Control
    //           className="text-muted "
    //           type="date"
    //           placeholder="Enter date"
    //           value={checkInDate}
    //           onChange={(e) => setCheckInDate(e.target.value)}
    //         />
    //       </Form.Group>

    //       <Form.Group controlId="formBasicEmail">
    //         <Form.Label className="text-start text-dark">
    //           Check-Out Date
    //         </Form.Label>
    //         <Form.Control
    //           className="text-muted"
    //           type="date"
    //           placeholder="Enter date"
    //           value={checkOutDate}
    //           onChange={(e) => setCheckOutDate(e.target.value)}
    //         />
    //       </Form.Group>

    //       {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group> */}
    //       {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group> */}
    //       <Button variant="primary" type="submit">
    //         Submit
    //       </Button>
    //     </Form>
    //   </div>
    // </Card>
  );
}
