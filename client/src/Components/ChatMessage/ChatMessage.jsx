import "./chatMessage.css";
import { format, parseISO } from "date-fns";

export default function ChatMessage({
  content,
  authorName,
  timestamp,
  isFirstPerson,
}) {
  return (
    <div className="ChatMessage_firstPerson">
      <div
        className={
          !isFirstPerson ? "actual-message-container all" : "onRight all"
        }
      >
        <h4 className="authorName">{authorName}</h4>
        <p>{content} </p>
        <span className="time-stamp">
          {" "}
          {format(parseISO(timestamp), "hh:mm a")}
        </span>
      </div>
    </div>
  );
}
