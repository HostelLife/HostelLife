import React from "react";
import EventProfileBefore from "../EventProfileBefore/EventProfileBefore.jsx";
import EventsPage from "../EventsPage/EventsPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatagoriesPage from "../CatagoriesPage/CatagoriesPage.jsx";
import WelcomePage from "../WelcomePage/WelcomePage.jsx";
import ChatPage from "../ChatPage/ChatPage.jsx";
import AdminPage from "../AdminPage/AdminPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/events" element={<CatagoriesPage />} />
          <Route exact path="/events/:category" element={<EventsPage />} />
          <Route exact path="/event/:id" element={<EventProfileBefore />} />
          <Route exact path="/event/:id" element={<ChatPage />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
