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
    urlSlug: "visit_places",
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
];

export default function CatagoriesPage() {
  return (
    <Card className="text-center bg-light text-light WelcomePage_mainContainer">
      <div className="text-center p-2">
        <div className="d-flex flex-row justify-content-between">
          <Link to="/welcome">
            <BackButton />
          </Link>

          <h3
            style={{
              marginTop: "1rem",
              marginLeft: "1rem",
              marginBottom: "1rem",
              color: "#000",
            }}
          >
            Daily Activities
            {/* divide into a separate container  */}
          </h3>
          <div> </div>
        </div>
        <Container className="CatagoriesPage">
          {/* <p className="SubTitleFont">CATEGORIES </p>
      <Container className="ActivityPage"> */}
          <Row>
            {activities.map((activity) => (
              <Col xs={6} className="CatagoriesPage_Card">
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
