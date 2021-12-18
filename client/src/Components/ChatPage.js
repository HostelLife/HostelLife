import React, { useState, useEffect } from "react";
import CardChat from "./CardChat";
import { useParams } from "react-router-dom";

function ChatPage() {
  const [events, setEvents] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/events/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <div>
      {events.map((event) => {
        return <CardChat event={event} />;
      })}
    </div>
  );
}

export default ChatPage;
