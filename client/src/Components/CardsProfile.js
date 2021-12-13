import React from "react";
import { Link } from "react-router-dom";

function CardsProfile({ event }) {
  const { title, description, imagefilename, starttime } = event;
  // const reDirectUrl = `/events/visit_places/${title}`;
  return (
    <div>
      <Link to={`/event/${title}`} className="btn btn-outline-primary chat-btn">
        {title} <span className="ml-3">{starttime}</span>{" "}
        <span className="ml-3">{description}</span>
        <span className="ml-3">{imagefilename}</span>{" "}
      </Link>
    </div>
  );
}

export default CardsProfile;
