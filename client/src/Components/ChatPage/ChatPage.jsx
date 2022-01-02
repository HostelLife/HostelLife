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
  const eventId = id;

  // useEffect(() => {
  //   const url = `${process.env.REACT_APP_API_BASE_URL}/events/${id}?userEmail=${userEmail}`;
  //   console.log(userEmail);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setEvent(data))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [id, userEmail]);

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

  
  return (
    <div>
      {event && <CardChat event={event}/>}

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

      <ChatMessageInput eventId={eventId} userEmail ={userEmail} />
    </div>
  );
}

export default ChatPage;
