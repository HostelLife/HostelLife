import React, { useEffect, useState } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import "./AdminPage";
import { CopyToClipboard } from "react-copy-to-clipboard";

function PopOver({ userEmail }) {
  const url = `${window.location.origin}?email=${userEmail}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=250x250`;

  const popover = (
    <Popover id="popover-positioned-top">
      <Popover.Header as="h3">New Booking Registered!</Popover.Header>
      <Popover.Body className="px-3">
        <img src={qrUrl} alt="QR Code Url" />
      </Popover.Body>
      <Popover.Body className="px-3">{url}</Popover.Body>
      <CopyToClipboard text={url}>
        <button
          style={{
            borderRadius: "15px",
            padding: ".3rem",
            marginLeft: "1rem",
            marginBottom: "1rem",
          }}
        >
          Copy the link
        </button>
      </CopyToClipboard>
    </Popover>
  );
  const SubmitForm = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button
        className="AdminPage_SubmitButton"
        variant="primary"
        type="submit"
        style={{ borderRadius: "18px" }}
      >
        Submit
      </Button>
    </OverlayTrigger>
  );

  return (
    <>
      <SubmitForm />
    </>
  );
}

export default PopOver;
