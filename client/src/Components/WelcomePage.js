import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  useEffect(() => {
    const url = `http://localhost:3000`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">HostelLife</h1>
                <h5 className="card-title text-center">
                  Make new friends during travelling...
                </h5>
                <Link to="/events" className="btn btn-outline-primary chat-btn">
                  <h6>Let's Go!</h6>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
