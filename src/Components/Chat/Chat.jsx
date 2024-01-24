import React from "react";
import { NavLink } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./Chat.scss";

const Chat = () => {
  const theme = {
    background: "#f5f5f5",
    headerBgColor: "#353A3D",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#353A3D",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const config = {
    width: "300px",
    height: "500px",
    floating: true,
    placeholder: "Message",
  };
  const steps = [
    {
      id: "1",
      message: "Welcome to Tk Keyboards. What's your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      validator: (value) => {
        if (/^[A-Za-z]{1,15}$/.test(value)) {
          return true;
        } else {
          return "Introduce un nombre";
        }
      },
      trigger: "3",
    },
    {
      id: "3",
      message: "Delighted {previousValue}, let's see how I can help you.",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: "c", label: "Products", trigger: "5a" },
        { value: "h", label: "Support", trigger: "5b" },
        { value: "t", label: "Contact", trigger: "5c" },
      ],
    },
    {
      id: "5a",
      component: (
        <div>
          <NavLink to="/products">Products</NavLink>
        </div>
      ),
      trigger: "6",
    },
    {
      id: "5b",
      component: (
        <div>
          <h5>Our customer service hours</h5>
          <p>Monday to Friday</p>
          <p>09:00 to 21:00</p>
          <p>Saturdays, Sundays and holidays</p>
          <p>09:00 to 15:00</p>
        </div>
      ),
      trigger: "6",
    },
    {
      id: "5c",
      message: "Our telephone number is 902 02 02 02",
      trigger: "6",
    },
    {
      id: "6",
      message: "Can we help you with anything else?",
      trigger: "7",
    },
    {
      id: "7",
      options: [
        { value: "s", label: "Yes", trigger: "4" },
        { value: "n", label: "No", trigger: "8" },
      ],
    },
    {
      id: "8",
      message: "Thank you for contacting us",
      trigger: "9",
    },
    {
      id: "9",
      message: "You can also visit our history in the following link",
      trigger: "10",
    },
    {
      id: "10",
      component: (
        <div>
          <NavLink to="/about">Our Story</NavLink>
        </div>
      ),
    },
  ];
  return (
    <div className="chat">
      <ThemeProvider theme={theme}>
        <ChatBot style={{ zIndex: 9999 }} steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
};

export default Chat;
