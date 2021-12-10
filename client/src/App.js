import React from "react";
import EventProfilePage from "./Components/EventProfilePage";
import EventsPage from "./Components/EventsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivitiesPage from "./Components/ActivitiesPage";

const App = () => {
  return (
    <>
      <h1>Hostel Life</h1>
      <ActivitiesPage />
      <EventsPage />
      <EventProfilePage />
      <BrowserRouter>
        <Routes>
          <Route path="/events" element={<ActivitiesPage />} />
          <Route path="/events/:category" element={<EventsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
