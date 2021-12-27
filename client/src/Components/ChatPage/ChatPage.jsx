import React, { useState, useEffect } from "react";
import CardChat from "./CardChat.jsx";
import { useParams } from "react-router-dom";

function ChatPage() {
  const [event, setEvent] = useState();
  const userInfo = JSON.parse(window.localStorage.getItem("userInfoKey"));
  const userEmailLocal = userInfo.email;
  console.log("User mail from local storage " + userEmailLocal);
  let { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/events/${id}?userEmail=${userEmailLocal}`;
    console.log(userEmailLocal);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((error) => {
        console.error(error);
      });
  }, [id, userEmailLocal]);

  return <div>{event && <CardChat event={event} />}</div>;
}

export default ChatPage;
