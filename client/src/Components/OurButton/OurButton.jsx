import Button from "react-bootstrap/esm/Button";
import React from "react";
import "./OurButton.css";

function OurButton({ content }) {
  return (
    <Button
      className="OurButton"
      variant="success"
      style={{ border: "none", borderRadius: "18px" }}
    >
      {content}
    </Button>
  );
}

export default OurButton;
