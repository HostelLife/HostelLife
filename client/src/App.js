import React from "react";
import EventProfilePage from "./Components/EventProfilePage";
import EventsPage from "./Components/EventsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivitiesPage from "./Components/ActivitiesPage";
import WelcomePage from "./Components/WelcomePage";

const App = () => {
  return (
    <>
      {/* <WelcomePage />
      <ActivitiesPage />
      <EventsPage />
      <EventProfilePage /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/events" element={<ActivitiesPage />} />
          <Route exact path="/events/:category" element={<EventsPage />} />
          <Route exact path="/event/:id" element={<EventProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
