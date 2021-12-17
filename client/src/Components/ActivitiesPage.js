import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SearchBar } from "./SeachBar";
import CategoryCard from "./CategoryCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ActivitiesPage.css";

const activities = [
  { label: "Visit Places", urlSlug: "visit_places" },
  { label: "Beach", urlSlug: "beach" },
  { label: "Hiking", urlSlug: "hiking" },
  { label: "Beach", urlSlug: "biking" },
  { label: "Beach", urlSlug: "food" },
  { label: "Beach", urlSlug: "shopping" },
  { label: "Beach", urlSlug: "party" },
];

export default function ActivitiesPage() {
  return (
    <div className="text-center">
      {/* <SearchBar /> */}
      <h1> Welcome to daily Activities</h1>
      <p className="mt-3">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <Container className="ActivityPage">
        <Row>
          {activities.map((activity) => (
            <Col xs={6}>
              <CategoryCard urlSlug={activity.urlSlug} label={activity.label} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <div className="d-grid gap-2 d-flex flex-column bd-highlight mb-3">
          {activities.map((activity) => (
            <CategoryCard urlSlug={activity.urlSlug} label={activity.label} />
          ))}
        </div> */}
    </div>
  );
}
