import "./style.css";
import { useState, useEffect } from "react";
import { countdown } from "@/utils/countdown";
import { Event } from "@/types/event";

const event: Event = {
  id: 1,
  name: "Christmas Day",
  date: new Date("December 25, 2024 00:00:00"),
  description:
    "Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world.",
  location: "",
  background_gradient:
    "linear-gradient( 45deg, rgba(219, 104, 133, 0.8), rgba(151, 34, 57, 0.8))",
  text_gradient:
    "-webkit-linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)",
};

function App() {
  const [eventCountdown, setEventCountdown] = useState(event.date);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEventCountdown(new Date(event.date));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      style={{
        backgroundImage: event.background_gradient,
        color: event.text_gradient,
      }}
      className="event"
    >
      <div
        className="event-container"
        style={{
          borderImage: event.text_gradient + " 30",
        }}
      >
        <div className="event-countdown">
          <h2>{countdown(eventCountdown).days} days,</h2>
          <h2>{countdown(eventCountdown).hours} hours,</h2>
          <h2>{countdown(eventCountdown).minutes} minutes,</h2>
          <h2 style={{ fontSize: 32 }}>
            {countdown(eventCountdown).seconds} seconds
          </h2>
        </div>
        <h1
          className="event-name"
          style={{
            background: event.text_gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {event.name.toUpperCase()}
        </h1>
        <p style={{ fontSize: 24 }}>{event.description}</p>
      </div>
    </div>
  );
}

export default App;
