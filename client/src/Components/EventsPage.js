import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';

import { SearchBar } from "./SeachBar";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  let { category } = useParams();

  useEffect(() => {
    const url = `http://localhost:3000/events?category=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error(error);
      });
  }, [events, category]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <SearchBar />

            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Visit Beautiful Places
                </h5>
                <p className="card-text border text-center">
                  Select places to visit and meet new people who are visiting
                  similar places...
                </p>
                <Link
                  to="/events/visit_places/sagrada_familia"
                  className="btn btn-outline-primary chat-btn"
                ></Link>
                <Link
                  to="/events/visit_places/beach"
                  className="btn btn-outline-primary chat-btn"
                ></Link>
                <Link
                  to="/events/visit_places/party"
                  className="btn btn-outline-primary chat-btn"
                ></Link>

                {events.map((event) => {
                  return <Card event={event} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
