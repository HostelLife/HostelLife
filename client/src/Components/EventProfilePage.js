import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsProfile from "./CardProfile";

export default function EventProfilePage() {
  const [events, setEvents] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/events/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-body">
                {events.map((event) => {
                  return <CardsProfile event={event} />;
                })}

                {/* <h5 className="card-title text-center">Sagrada Familia</h5>
                <img
                  className="img-thumbnail event-img"
                  src="public/images/sagradaFamilia.jpg"
                  mb-2
                  alt="sagrada-familia"
                /> */}
                {/*  <h6 className="my-3 border bg-success text-center">
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
