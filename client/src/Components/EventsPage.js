import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';

import { SearchBar } from "./SeachBar";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

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

  // const onChange = (e) => setSearchTerm(e.target.value);

  // const eventSearch = events.filter((item) => {
  //   return Object.keys(item).some((key) =>
  //     item[key].toString
  //       .toLowerCase()
  //       .includes(searchTerm.toString().toLocaleLowerCase())
  //   );
  // });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
      