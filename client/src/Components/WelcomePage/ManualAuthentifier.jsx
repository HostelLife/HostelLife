import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./WelcomePage.css";
import QrReaderComp from "../QrReader/QrReaderComp.jsx";

export default function ManualAuthentifier({ onUserEmailChange }) {
  const [visibleQr, setVisibleQr] = useState(false);
  const [visibleInput, setVisibleInput] = useState(false);
  const [userEmailInput, setUserEmailInput] = useState("");

  const onSubmitEmail = (e) => {
    e.preventDefault();
    onUserEmailChange(userEmailInput);
  };

  return (
    <>
      <Link to="/events">
        <button className="WelcomePage_button">Continue Without LogIn</button>
      </Link>
      <div>
        <button
          content={"Scan QR Code"}
          className="WelcomePage_button"
          onClick={() => setVisibleQr(!visibleQr)}
          variant="primary"
          size="lg"
        >
          {visibleQr ? "Close Scanner" : "Scan QR Code"}
        </button>
        {visibleQr && <QrReaderComp> </QrReaderComp>}
        <button
          content={"Input Email"}
          className="WelcomePage_button"
          onClick={() => setVisibleInput(!visibleInput)}
          variant="secondary"
          size="mg"
        >
          {visibleInput ? "Close Input Field" : "Input Email"}
        </button>
        {visibleInput && (
          <div>
            <Form onSubmit={onSubmitEmail}>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label className="text-light"></Form.Label>
                <Form.Control
                  style={{ borderRadius: "18px" }}
                  type="text"
                  placeholder="Enter Email"
                  value={userEmailInput}
                  onChange={(e) => {
                    setUserEmailInput(e.target.value);
                  }}
                />
              </Form.Group>
              <Button
                className="WelcomePage_button_terciary"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        )}
      </div>
    </>
  );
}
