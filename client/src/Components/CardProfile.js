import React from "react";
import { Link } from "react-router-dom";

function CardsProfile({ event }) {
  const { title, description, imagefilename, starttime } = event;

  return (
    <div>
      <Link to={`/event/${title}`} className="btn btn-outline-primary chat-btn">
        {title} <span className="ml-3">{starttime}</span>{" "}
        <span className="ml-3">{description}</span>
        <img
          src={`/images/${imagefilename}`}
          height="250px"
          width="450px"
          alt=""
        />
      </Link>
    </div>
  );
}

export default CardsProfile;
