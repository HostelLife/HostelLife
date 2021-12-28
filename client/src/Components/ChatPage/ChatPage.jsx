import React, { useState, useEffect } from "react";
import CardChat from "./CardChat.jsx";
import { useParams } from "react-router-dom";

function ChatPage() {
  const [event, setEvent] = useState();
  const userInfo = JSON.parse(window.localStorage.getItem("userInfoKey"));
  const userEmail = userInfo.email;
  console.log("User mail from local storage " + userEmail);
  let { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/events/${id}?userEmail=${userEmail}`;
    console.log(userEmail);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((error) => {
        console.error(error);
      });
  }, [id, userEmail]);

  const onClick = async (event) => {
    event.preventDefault();

    const data = { userEmail: userEmail };
    console.log(data);

    const url = `http://localhost:5000/messages`;
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setEvent(event);
    console.log(event);
  };

  return <div>{event && <CardChat event={event} onClick={onClick} />}</div>;
}

export default ChatPage;
