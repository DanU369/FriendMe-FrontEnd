import React, { useState, useEffect, useRef } from "react";
import { axios } from "./axios/axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("use effect");
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await axios
      .get("/event")
      .catch((err) => console.log("Error:", err));
    console.log(response.data);
    if (response && response.data) {
      setEvents(response.data);
    }
  };

  return (
    <div>
      {events.map((event) => {
        return (
          <div>
            <h2>Name: {event.name}</h2>
            <div>Type: {event.type}</div>
            <div>Description: {event.description}</div>
            <div>Spots Left: {event.available_spots}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
