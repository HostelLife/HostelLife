import React from "react";
import CategoryCard from "./CategoryCard.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CatagoriesPage.css";
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton.jsx";
import Card from "react-bootstrap/Card";

const activities = [
  { label: "Visit Places", urlSlug: "visit_places" },
  { label: "Beach", urlSlug: "beach" },
  { label: "Hiking", urlSlug: "hiking" },
  { label: "Biking", urlSlug: "biking" },
  { label: "Shopping", urlSlug: "shopping" },
  { label: "Food", urlSlug: "food" },
  { label: "Party", urlSlug: "party" },
];

export default function CatagoriesPage() {
  return (
    <Card className="text-center bg-light text-light WelcomePage_mainContainer">
      <div className="text-center p-2">
        <div className="d-flex flex-row justify-content-between">
          <Link to="/">
            <BackButton />
          </Link>

          <h3
            style={{
              marginTop: "1rem",
              color: "#000",
            }}
          >
            Choose the daily Activities
          </h3>

          <div></div>
        </div>

        <Container className="CatagoriesPage">
          <Row>
            {activities.map((activity) => (
              <Col xs={6} className="CatagoriesPage_Card">
                <CategoryCard
                  urlSlug={activity.urlSlug}
                  label={activity.label}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Card>
  );
}
