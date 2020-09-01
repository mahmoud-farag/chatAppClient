import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import DisplayOnlineUsers from "../DisplayOnlineUsers/DisplayOnlineUsers";

let socket;

//func component
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomUsers, setRoomUsers] = useState("");
  const endPoint = "https://chatappserver3232.herokuapp.com/";
  //   const endPoint = "http://localhost:4000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(endPoint);
    setName(name);
    setRoom(room);

    socket.emit("client-join", { name, room }, (err) => {
      // console.log(err);
      // alert(err);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [endPoint, location.search]);

  useEffect(() => {
    socket.on(
      "message",
      (message) => {
        messages.push(message);
      },
      [messages]
    );

    socket.on("roomOnlineUsers", ({ users }, callback) => {
      setRoomUsers(users);
    });
  }, []);

  // useEffect(() => {

  //     socket.on('roomOnlineUsers', ({ users }, callback) => {
  //         setRoomUsers([...roomUsers, users])
  //     });
  // }, [roomUsers]);

  function sendMessage(e) {
    /* when you hit the Enter key or pressed the send button 
           then the whole page will be reloaded , and you will lose all 
           variables data, so this will create a problem and to prevent this
           you need to prevent the page reload useing preventDefualt () func
        */
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  }

  console.log(message, messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>

      <DisplayOnlineUsers users={roomUsers} room={room} />
    </div>
  );
};

export default Chat;
