import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function CardsProfile({ event }) {
  const { title, description, imagefilename, starttime } = event;

  return (
    <div>
      <div>
        <img src={`/images/${imagefilename}`} alt="" width={"300px"} />
      </div>
      <div> {title}</div>
      <div>{starttime}</div>
      <div>{description}</div>
      <div>
        <img
          className="google-map-img my-3"
          src="https://comunicandolonuevo.files.wordpress.com/2015/01/google-maps-new-interface1.jpg"
          mb-2
          alt="map"
        />
      </div>
      {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`/images/${imagefilename}`} />
          <Card.Body>
            <Card.Title>
              {title} <span className="ml-3">{starttime}</span>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card> */}
    </div>
  );
}

export default CardsProfile;
