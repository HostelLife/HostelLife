import React, { useState, useEffect } from "react";
import EventPageCard from "./EventPageCard.jsx";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton.jsx";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  let { category } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/events?category=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error(error);
      });
  }, [category]);

  // const headings = [
  //   {
  //     header: "Visit Sites",
  //     explanation:
  //       "Select sites to visit and meet new people who are visiting same sites..",
  //   },
  //   {
  //     header: "Enjoy the Barcelona Beach Experience",
  //     explanation:
  //       "Select beach which you want to visit with some other new people",
  //   },
  //   {
  //     header: "Hiking Routes",
  //     explanation:
  //       "Enjoy selcting routes to hike with new people who are going together with you",
  //   },
  //   {
  //     header: "Biking Routes",
  //     explanation:
  //       "Select biking routes to go though the greenery mountains with new people who are going joing with you",
  //   },
  //   {
  //     header: "Shopping Experience",
  //     explanation:
  //       "Select kinds of shopping experience you want with new people who are going together with you",
  //   },
  //   {
  //     header: "Food Craving",
  //     explanation:
  //       "Select the restaurent to have experience of local foods together with new people",
  //   },
  //   {
  //     header: "Party Lovers",
  //     explanation: "Select the club to have great experience with new people",
  //   },
  // ]

  return (
    <>
      <div className="d-flex flex-row p-2  text-center">
        <Link to="/events">
          <BackButton />
        </Link>

        <h5 className="mx-5  pt-3">Must See {category} sites</h5>
      </div>
      <p className=" text-center">
        Select sites to visit and meet new people who are visiting together with
        you.
      </p>
      <div>
        {events.map((event) => {
          return (
            <EventPageCard
              event={event}
              header={event.header}
              explanation={event.explanation}
            />
          );
        })}
      </div>
    </>
  );
}
