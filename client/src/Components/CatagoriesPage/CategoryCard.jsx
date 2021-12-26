import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./CategoryCard.css";

function CategoryCard({ label, urlSlug }) {
  return (
    <div>
      <Link to={`/events/${urlSlug}`}>
        <Button
          className="mt-1 px-4 CategoryCard"
          variant="#ffffff"
          style={{ borderRadius: "25px" }}
        >
          {label}
        </Button>{" "}
      </Link>
    </div>
  );
}

export default CategoryCard;
