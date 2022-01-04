import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatMessage from "../ChatMessage/ChatMessage.jsx";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton.jsx";
import ChatMessageInput from "./ChatMessageInput.jsx";
import "./ChatPage.css";

const getMessages = async (eventId, userEmail) => {
  const URL = `${process.env.REACT_APP_API_BASE_URL}/messages?event=${eventId}&userEmail=${userEmail}`;
  const response = await fetch(URL);
  const messages = await response.json();
  return messages;
};

function ChatPage() {
  const [event, setEvent] = useState();
  const [messages, setMessages] = useState([]);

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
  }, [id, userEmail]);

  useEffect(() => {
    setInterval(() => {
      getMessages(eventId, userEmail).then((messages) => {
        setMessages(messages);
      });
    }, 1000);
  }, [eventId, userEmail]);

  if (!event) {
    return <div> </div>;
  }
  const { title } = event;

  return (
    <Card style={{ backgroundColor: "#000", height: "100vh" }}>
      <Card
        className="d-flex p-4 flex-row justify-content-between"
        style={{ backgroundColor: "#000", height: "12%" }}
      >
        <Link to={`/event/${eventId}`}>
          <BackButton />
        </Link>
        <p className="mt-4 mx-2 text-light ChatPage_title">{title}</p>
        <div></div>
      </Card>

      <Card className="ChatPage_ChatMessages">
        <Card className="ChatPage_messages">
          {messages.map((message) => (
            <ChatMessage
              content={message.content}
              authorName={message.user_name}
              timestamp={message.time_stamp}
              isFirstPerson={message.isFirstPerson}
            />
          ))}
        </Card>
        <ChatMessageInput
          className="ChatPage_messagesInput"
          style={{ backgroundColor: "#000" }}
          eventId={eventId}
          userEmail={userEmail}
        />
      </Card>
    </Card>
  );
}

export default ChatPage;
