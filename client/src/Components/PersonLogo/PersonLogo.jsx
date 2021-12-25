import React from "react";
import { BsPerson } from "react-icons/bs";
import "./PersonLogo.css";

function PersonLogo() {
  return (
    <div className="PersonLogo">
      <BsPerson className="PersonLogo" />
      <BsPerson />
    </div>
  );
}

export default PersonLogo;
