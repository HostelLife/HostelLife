import Button from "react-bootstrap/esm/Button";
import React from "react";
import "./OurButton.css";

function OurButton({ content }) {
  return (
    <Button className="Badge" variant="success">
      {content}
    </Button>
  );
}

export default OurButton;
