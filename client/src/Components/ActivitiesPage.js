import React from "react";
import CategoryCard from "./CategoryCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ActivitiesPage.css";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

const activities = [
  { label: "Visit Places", urlSlug: "visit_places" },
  { label: "Beach", urlSlug: "beach" },
  { label: "Hiking", urlSlug: "hiking" },
  { label: "Biking", urlSlug: "biking" },
  { label: "Shopping", urlSlug: "shopping" },
  { label: "Food", urlSlug: "food" },
  { label: "Party", urlSlug: "party" },
];

export default function ActivitiesPage() {
  return (
    <div className="text-center p-2">
      <div className="d-flex flex-row">
        <Link to="/">
          <BackButton />
        </Link>

        <h3 style={{ marginTop: "1rem" }}> Welcome to daily Activities</h3>
      </div>

      <p>
        With supporting text below as a natural lead-in to additional content.
      </p>
      <Container className="ActivityPage">
        <Row>
          {activities.map((activity) => (
            <Col xs={6} className="ActivitiesPage__card">
              <CategoryCard urlSlug={activity.urlSlug} label={activity.label} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
