import React from "react";
import { Link, useSearchParams } from "react-router-dom";

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
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">HostelLife</h1>
                <h5 className="card-title text-center">
                  Make new friends while travelling...
                </h5>
                <Link to="/events" className="btn btn-outline-primary chat-btn">
                  <h6 type="button" onClick={getLocalStorageEmail}>
                    Let's Go!
                  </h6>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
