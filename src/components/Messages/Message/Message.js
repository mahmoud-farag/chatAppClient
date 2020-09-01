import React from "react";
import ReactEmoji from "react-emoji";
import "./Message.css";

// func component
const Message = ({ message, name }) => {
  const { user, mesg } = message;
  let isSentByCurrentUser = false;

  let trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    //if the user is not the current user then print it's message to the left .
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(mesg)}</p>
      </div>
    </div>
  ) : (
    //if the user is the name of the current user then print its message on the right .
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(mesg)}</p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
