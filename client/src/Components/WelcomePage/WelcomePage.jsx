import React, { useState } from "react";
import { Redirect, Link, useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./WelcomePage.css";
import QrReaderComp from "../QrReader/QrReaderComp.jsx";

// const getLocalStorageEmail = () => {
//   //NOT SURE ABOUT THE FUNCTION
const userInfoResult = localStorage.getItem("userInfoKey");
const userInfoObj = JSON.parse(userInfoResult);

//   console.log(typeof userInfoObj);
//   const { email, name } = userInfoObj;
//   console.log(email);

//   if (email == "" && name === "") {
//     console.log("access granted");
//   } else {
//     console.log("Not Authorised! ");
//   }
// };
//getLocalStorageData()

export default function WelcomePage() {
  let [searchParams] = useSearchParams();

  const userEmail = searchParams.get("email");
  const userName = searchParams.get("name");

  const userInfo = {
    email: userEmail,
    name: userName,
  };

  localStorage.setItem("userInfoKey", JSON.stringify(userInfo));

  const [visibleQr, setVisibleQr] = useState(false);
  const [visibleInput, setVisibleInput] = useState(false);
  //localStorage.setItem("name", userName)
  const [userEmailInput, setUserEmailInput] = useState("");

  const onSubmitEmail = (e) => {
    e.preventDefault();
    // localStorage.setItem("userInfoKey", JSON.stringify(userInfo));
    window.location.href = `/?email=${userEmailInput}`;
    window.location.href = `/events`;
    // const accessURL = `${window.location.origin}?email=${userEmailInput}`;
    // <Link to={accessURL} />;
    // console.log(accessURL);
  };

  if (userInfoObj.email != null) {
    return (
      <Card
        style={{ height: "100vh" }}
        className="text-center bg-dark text-dark WelcomePage_mainContainer"
      >
        <img
          alt=""
          src="images\logo-white.png"
          style={{ width: "18rem", marginTop: "1px" }}
          className=" WelcomePage_image"
        />

        <Card.Title className=" mt-5 WelcomePage_text">
          {" "}
          Make new friends while travelling...
        </Card.Title>

        <Link to="/events">
          <button className="WelcomePage_button">Start Exploring!</button>
        </Link>
      </Card>
    );
  }
  //FIX REPETITION?
  else {
    return (
      <Card
        style={{ height: "100vh" }}
        className="text-center bg-dark text-dark WelcomePage_mainContainer"
      >
        <img
          alt=""
          src="images\logo-white.png"
          style={{ width: "18rem", marginTop: "1px" }}
          className=" WelcomePage_image"
        />

        <Card.Title className=" mt-5 WelcomePage_text">
          {" "}
          Make new friends while travelling...
        </Card.Title>

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
                      return setUserEmailInput(e.target.value);
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
      </Card>
    );
  }
}
