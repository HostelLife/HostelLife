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
  {
    label: "Main Attractions",
    urlSlug: "main_attraction",
    imagefilename: "sagradaFamilia.jpg",
  },
  { label: "Beach", urlSlug: "beach", imagefilename: "barcelonita.jpg" },
  { label: "Hiking", urlSlug: "hiking", imagefilename: "Montserrat.jpg" },
  { label: "Biking", urlSlug: "biking", imagefilename: "Forat_del_vent.jpg" },
  {
    label: "Shopping",
    urlSlug: "shopping",
    imagefilename: "Barca_official_storeCampNou.jpg",
  },
  { label: "Food", urlSlug: "food", imagefilename: "7_Portes.jpg" },
  { label: "Party", urlSlug: "party", imagefilename: "shoko.png" },
  { label: "Football", urlSlug: "football", imagefilename: "Camp-Nou.jpg" },
];

export default function CatagoriesPage() {
  return (
    <Card
      className="text-center text-light"
      style={{ backgroundColor: "#000" }}
    >
      <div className="text-center p-2">
        <div className="d-flex flex-row justify-content-between">
          <Link to="/">
            <BackButton />
          </Link>

          <h3
            style={{
              marginTop: "1rem",
              marginLeft: "1rem",
              marginBottom: "1rem",
              color: "#fff",
            }}
          >
            Daily Activities
          </h3>
          <div> </div>
        </div>
        <Container className="CatagoriesPage">
          <Row>
            {activities.map((activity, index) => (
              <Col xs={6} className="CatagoriesPage_Card" key={index}>
                <CategoryCard
                  urlSlug={activity.urlSlug}
                  label={activity.label}
                  imagefilename={activity.imagefilename}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Card>
  );
}
