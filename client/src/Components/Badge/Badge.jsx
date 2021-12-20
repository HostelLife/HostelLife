import Button from "react-bootstrap/esm/Button";
import React from "react";
import "./Badge.css";

function Badge({ content }) {
  return (
    <Button className="Badge" variant="success">
      {content}
    </Button>
  );
}

export default Badge;
