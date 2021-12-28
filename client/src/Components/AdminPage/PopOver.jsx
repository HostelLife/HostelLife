import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import "./AdminPage";
import { CopyToClipboard } from "react-copy-to-clipboard";

function PopOver({ userEmail }) {
  const url = `http://localhost:3000?email=${userEmail}`;
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Copy the Link</Popover.Header>
      <Popover.Body className="px-3">{url}</Popover.Body>
      <CopyToClipboard text={url}>
        <button
          style={{
            borderRadius: "15px",
            padding: ".3rem",
          }}
        >
          Copy
        </button>
      </CopyToClipboard>
    </Popover>
  );
  const SubmitForm = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
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
