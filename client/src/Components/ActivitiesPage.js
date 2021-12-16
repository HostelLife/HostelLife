import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SeachBar";

export default function ActivitiesPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-body">
                <SearchBar />
                <h5 className="card-title text-center">
                  Welcome to daily Activities
                </h5>

                <Link
                  to="/events/visit_places"
                  className="btn btn-outline-primary chat-btn"
                >
                  <h6>Visit Places</h6>{" "}
                </Link>

                <Link
                  to="/events/beach"
                  className="btn btn-outline-primary chat-btn"
                >
                  <h6>Beach</h6>{" "}
                </Link>

                <Link
                  to="/events/hiking"
                  className="btn btn-outline-primary chat-btn"
                >
                  <h6>Hiking</h6>{" "}
                </Link>
                <Link
                  to="/events/biking"
                  className="btn btn-outline-primary chat-btn"
                >
                  <h6>Biking</h6>{" "}
                </Link>
                <Link
                  to="/events/shopping"
                  className="btn btn-outline-primary chat-btn"
                >
                  <h6>Shopping</h6>{" "}
                </Link>
                <Link
                  to="/events/food"
                  className="btn btn-outline-primary chat-btn"
                >
                  <h6>Food</h6>{" "}
                </Link>
                <Link
                  to="/events/party"
                  className="btn btn-outline-primary chat-btn"
                >
                  <h6>Party</h6>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
