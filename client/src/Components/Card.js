import React from "react";
import { Link } from "react-router-dom";

function Card({ event }) {
  const { id, title, starttime } = event;
  // const reDirectUrl = `/events/visit_places/${title}`;
  return (
    <div>
      <Link to={`/event/${id}`} className="btn btn-outline-primary chat-btn">
        {title} <span className="ml-3">{starttime}</span>{" "}
      </Link>
    </div>
  );
}

export default Card;
