import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function EventProfilePage() {
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
  }, [category]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-body">
                {events.map((event) => {
                  return <Card event={event} />;
                })}
                {/* <h5 className="card-title text-center">Sagrada Familia</h5>
                <img
                  className="img-thumbnail event-img"
                  src="/sagradaFamilia.jpg"
                  mb-2
                  alt="sagrada-familia"
                />
                <h6 className="my-3 border bg-success text-center">
                  23/12/2021
                </h6>
                <p className="card-text border text-center">
                  Explore Antoni Gaudi's unfinished masterpiece, the Sagrada
                  Familia. Gaudi's iconic work - its impressive facades and
                  interior - is one of Spain's most visited monuments...
                </p>

                <div className="d-flex flex-row justify-content-center">
                  <a href="" className="btn btn-outline-success btn-sm mx-1">
                    <h6>Read More</h6>
                  </a>
                  <a href="" className="btn btn-outline-success btn-sm mx-1">
                    <h6>Join Now</h6>
                  </a>
                  <a href="" className="btn btn-outline-danger btn-sm mx-3">
                    <FontAwesomeIcon icon={faHeart} />
                  </a> */}
              </div>

              <img
                className="google-map-img my-3"
                src="https://comunicandolonuevo.files.wordpress.com/2015/01/google-maps-new-interface1.jpg"
                mb-2
                alt="map"
              />

              <div>
                {/* <a href="">
                  <button className="btn btn-outline-primary chat-btn">
                    <h6>Chat / Make Friends</h6>{" "}
                  </button> */}
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
