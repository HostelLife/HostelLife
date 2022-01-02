import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatMessage from "../ChatMessage/ChatMessage.jsx";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton.jsx";
import ChatMessageInput from "./ChatMessageInput.jsx";

const getMessages = async (eventId, userEmail) => {
  const URL = `${process.env.REACT_APP_API_BASE_URL}/messages?event=${eventId}&userEmail=${userEmail}`;
  const response = await fetch(URL);
  const messages = await response.json();
  return messages;
};

function ChatPage() {
  const [event, setEvent] = useState();
  const [messages, setMessages] = useState();

  const userInfo = JSON.parse(window.localStorage.getItem("userInfoKey"));
  const userEmail = userInfo.email;
  let { id } = useParams();
  const eventId = id;

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/events/${id}?userEmail=${userEmail}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((error) => {
        console.error(error);
      });
  }, [eventId, userEmail]);

  useEffect(() => {
    getMessages(eventId, userEmail).then((messages) => setMessages(messages));
  }, []);

  if (!event) {
    return <div> </div>;
  }
  const { title } = event;

  return (
    <div>
      <Card className="d-flex flex-row bg-dark justify-content-between">
        <Link to={`/event/${eventId}`}>
          <BackButton />
        </Link>
        <p className="mt-4 mx-2 text-light">{title}</p>
        <div></div>
      </Card>

      <div style={{ minHeight: "60vh", backgroundColor: "#141111" }}>
        {messages.map((message) => (
          <ChatMessage
            content={message.content}
            authorName={message.user_name}
            timestamp={message.time_stamp}
            isFirstPerson={message.isFirstPerson}
          />
        ))}
      </div>

      <ChatMessageInput eventId={eventId} userEmail={userEmail} />
    </div>
  );
}

export default ChatPage;
