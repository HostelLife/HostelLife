import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';

import { SearchBar } from "./SeachBar";

export default function ActivitiesPage() {
  const [events, setEvents] = useState([]);

  let { category } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/events?category=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <SearchBar />

            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Welcome to daily Activities
                </h5>
                <a href="">
                  <button className="btn btn-outline-primary chat-btn">
                    <h6>Visit Places</h6>{" "}
                  </button>
                </a>
                <a href="">
                  <button className="btn btn-outline-primary chat-btn">
                    <h6>Hiking</h6>{" "}
                  </button>
                </a>
                <a href="">
                  <button className="btn btn-outline-primary chat-btn">
                    <h6>Biking</h6>{" "}
                  </button>
                </a>
                <a href="">
                  <button className="btn btn-outline-primary chat-btn">
                    <h6>Shopping</h6>{" "}
                  </button>
                </a>
                <div>
                  {events.map((event) => {
                    return <Card event={event} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
