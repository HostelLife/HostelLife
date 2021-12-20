import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import OurButton from "../Badge/Badge.jsx";

const getLocalStorageEmail = () => {
  //NOT SURE ABOUT THE FUNCTION
  const userInfoResult = localStorage.getItem("userInfoKey");
  const userInfoObj = JSON.parse(userInfoResult);

  console.log(typeof userInfoObj);
  const { email, name } = userInfoObj;
  console.log(email);

  if (email == "" && name === "") {
    console.log("access granted");
  } else {
    console.log("Not Authorised! ");
  }
};
//getLocalStorageData()

export default function WelcomePage() {
  let [searchParams, setSearchParams] = useSearchParams();

  const userEmail = searchParams.get("email");
  const userName = searchParams.get("name");

  const userInfo = {
    email: userEmail,
    name: userName,
  };

  localStorage.setItem("userInfoKey", JSON.stringify(userInfo));

  //localStorage.setItem("name", userName)

  return (
    <Card
      style={{ height: "100%" }}
      className="text-center bg-light bg-gradient text-light p-5 mt-5"
    >
      <Card.Body style={{ height: "100%" }}>
        <img alt="" src="images\logo.png" style={{ width: "20rem" }} />

        <Card.Title className="text-dark mt-5">
          {" "}
          Make new friends while travelling...
        </Card.Title>

        <Link to="/events">
          <OurButton content={"Let's Go!"} />
        </Link>
      </Card.Body>
    </Card>
  );
}
