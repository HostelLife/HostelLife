import React, { useState, useEffect } from "react";
import CardChat from "./CardChat.jsx";
import { useParams } from "react-router-dom";
import ChatMessage from "../ChatMessage/ChatMessage.jsx";

import ChatMessageInput from "./ChatMessageInput.jsx";

function ChatPage() {
  const [event, setEvent] = useState();

  const userInfo = JSON.parse(window.localStorage.getItem("userInfoKey"));
  const userEmail = userInfo.email;
  console.log("User mail from local storage " + userEmail);
  let { id } = useParams();

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/events/${id}?userEmail=${userEmail}`;
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

    const url = `${process.env.REACT_APP_API_BASE_URL}/messages`;
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

  return (
    <div>
      {event && <CardChat event={event} onClick={onClick} />}

      <div style={{ minHeight: "60vh", backgroundColor: "#141111" }}>
        <ChatMessage content={"Hi"} 
          authorName = {"Suman"}
          timestamp={"10:20am"}
          isFirstPerson = {false}
          />
          <ChatMessage content={"hello, How are you all"} 
          authorName = {"Rana"}
          timestamp={"10:20am"}
          isFirstPerson = {true}
          />
      </div>

      <ChatMessageInput />
    </div>
  );
}

export default ChatPage;
