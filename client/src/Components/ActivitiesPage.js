import React from "react";
import CategoryCard from "./CategoryCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ActivitiesPage.css";

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
    <div className="text-center">
      <h1> Welcome to daily Activities</h1>
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
