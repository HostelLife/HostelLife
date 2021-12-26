import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CategoryCard.css";

function CategoryCard({ label, urlSlug, imagefilename }) {
  return (
    <div>
      <Link to={`/events/${urlSlug}`}>
        <Button
          className="mt-1 px-2 CategoryCard"
          variant="light"
          style={{
            backgroundImage: `url("/images/${imagefilename}")`,
          }}
        >
          {label}
        </Button>
      </Link>
    </div>
  );
}

export default CategoryCard;
