import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import OurButton from "../OurButton/OurButton.jsx";
import "./WelcomePage.css";

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
      style={{ height: "100vh" }}
      className="text-center bg-light text-dark WelcomePage_mainContainer"
    >
      <img
        alt=""
        src="images\logo-black.png"
        style={{ width: "18rem", marginTop: "1px" }}
        className=" WelcomePage_image"
      />

      <Card.Title className=" mt-5 WelcomePage_text">
        {" "}
        Make new friends while travelling...
      </Card.Title>

      <Link to="/events">
        <OurButton content={"Start Exploring"} className="WelcomePage_button" />
      </Link>
    </Card>
  );
}
