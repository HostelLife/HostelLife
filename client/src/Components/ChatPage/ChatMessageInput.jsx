import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import "./ChatMessageInput.css";

export default function ChatMessageInput({ userId, eventId }) {
  const [content, setContent] = useState("");

  const onSubmitMessage = async (e) => {
    e.preventDefault();
    try {
      const body = { userId, eventId, content };
      const response = await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Form onSubmit={onSubmitMessage}>
      <InputGroup className="mb-3 mt-2">
        <FormControl
          placeholder="Write a message"
          aria-label="Write a message"
          aria-describedby="basic-addon2"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" variant="outline-secondary" id="button-addon2">
          Send
        </Button>
      </InputGroup>
    </Form>
  );
}
