import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./CategoryCard.css";

function CategoryCard({ label, urlSlug, imagefilename }) {
  return (
    <div className="CategoryCard_Container">
      <Link to={`/events/${urlSlug}`}>
        <Button
          className="CategoryCard_button bg-dark p-3"
          style={{ border: "none", width: "90%", borderRadius: "20px" }}
        >
          <div
            className="mt-1 px-2 CategoryCard"
            variant="#F4F4F4"
            style={{
              backgroundImage: `url("/images/${imagefilename}")`,
              borderRadius: "20px",
            }}
          ></div>
          <div className="CatagoryCard_text">{label}</div>
        </Button>
      </Link>
    </div>
  );
}

export default CategoryCard;
