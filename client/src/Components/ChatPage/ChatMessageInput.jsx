import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import SendButton from "./SendButton";

import "./ChatMessageInput.css";

export default function ChatMessageInput({ userEmail, eventId }) {
  const [content, setContent] = useState("");

  const onSubmitMessage = async (e) => {
    e.preventDefault();
    try {
      const body = { userEmail, eventId, content };
      console.log("eventId", eventId);

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/messages`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      setContent("");



      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(content);

  return (
    <Form onSubmit={onSubmitMessage} className="Input-part">
      <InputGroup className="mb-3 mt-5 bg-dark overflow-hidden ChatMessageInputMain">
        <FormControl
          className="bg-dark border-0 px-3 text-light fs-4 bg-transparent ChatPage_inputform"
          placeholder="Write a message"
          aria-label="Write a message"
          aria-describedby="basic-addon2"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          type="submit"
          variant="outline-secondary"
          id="button-addon2"
          className="border-0 mx-3 bg-transparent"
        >
          <SendButton />
        </Button>
      </InputGroup>
    </Form>
  );
}
