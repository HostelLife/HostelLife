import React from "react";
import EventProfilePage from "./Components/EventProfilePage";
import EventsPage from "./Components/EventsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivitiesPage from "./Components/ActivitiesPage";
import WelcomePage from "./Components/WelcomePage";
import ChatPage from "./Components/ChatPage";

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
          <Route exact path="/event/:id" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
