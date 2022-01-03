import React from "react";
import EventProfilePage from "../EventProfilePage/EventProfilePage.jsx";
import EventsPage from "../EventsPage/EventsPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatagoriesPage from "../CatagoriesPage/CatagoriesPage.jsx";
import WelcomePage from "../WelcomePage/WelcomePage.jsx";
import ChatPage from "../ChatPage/ChatPage.jsx";
import AdminPage from "../AdminPage/AdminPage.jsx";
import EventProfileNoAuth from "../EventProfilePage/EventProfilePageNoAuth.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/events" element={<CatagoriesPage />} />
          <Route exact path="/events/:category" element={<EventsPage />} />
          <Route
            exact
            path="/event/:id"
            element={
              window.localStorage.length > 0 ? (
                <EventProfilePage />
              ) : (
                <EventProfileNoAuth />
              )
            }
          />
          <Route exact path="/event/:id/chat" element={<ChatPage />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
