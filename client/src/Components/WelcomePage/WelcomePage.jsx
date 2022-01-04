import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./WelcomePage.css";
import ManualAuthentifier from "./ManualAuthentifier";

const getUserEmailFromLocalStorage = () => {
  const userInfoResult = localStorage.getItem("userInfoKey");
  const userInfoObj = JSON.parse(userInfoResult);
  return userInfoObj?.email;
};

const persistUserEmailInLocalStorage = (userEmail) => {
  const userInfo = {
    email: userEmail,
  };

  localStorage.setItem("userInfoKey", JSON.stringify(userInfo));
};

export default function WelcomePage() {
  let [searchParams] = useSearchParams();

  const userEmailFromParams = searchParams.get("email");
  if (userEmailFromParams) {
    persistUserEmailInLocalStorage(userEmailFromParams);
  }

  const persistedUserEmail = getUserEmailFromLocalStorage();
  const [userEmail, setUserEmail] = useState(persistedUserEmail);

  const handleUserEmailChange = (newUserEmail) => {
    persistUserEmailInLocalStorage(newUserEmail);
    setUserEmail(newUserEmail);
  };

  return (
    <Card
      style={{ height: "100vh" }}
      className="text-center text-dark WelcomePage_mainContainer"
    >
      <img
        alt=""
        src="images\white-logo-final.png"
        style={{ width: "12rem" }}
        className="WelcomePage_image"
      />
      <Card.Title className=" mt-5 WelcomePage_text">
        Make new friends while travelling...
      </Card.Title>

      {userEmail ? (
        <Link to="/events">
          <button className="WelcomePage_button">Start Exploring!</button>
        </Link>
      ) : (
        <ManualAuthentifier onUserEmailChange={handleUserEmailChange} />
      )}
    </Card>
  );
}
