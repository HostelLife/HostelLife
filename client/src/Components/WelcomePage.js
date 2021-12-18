import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import OurButton from "./OurButton";

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
    <Card className="text-center bg-dark bg-gradient text-light p-5 mt-5">
      <Card.Body>
        <Card.Title> Make new friends while travelling...</Card.Title>
        <Card.Text className="mt-5">
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/events">
          <OurButton content={"Let's Go!"} />
        </Link>
      </Card.Body>
    </Card>
  );
}
