import React, { useState, useEffect, useRef } from "react";
import { axios } from "./axios/axios";

const PostEvent = () => {
  const nameRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  const spotsRef = useRef();

  // useEffect(()=>{console.log('render')},[])

  const handleSubmit = (e) => {
    e.preventDefault();
    postEvent();
    console.log("data send");
  };

  const postEvent = async () => {
    const object = {
      name: nameRef.current.value,
      type: typeRef.current.value,
      description: descriptionRef.current.value,
      available_spots: spotsRef.current.value,
    };
    await axios.post("/event", object);
    window.location.href = "http://localhost:3000/events";
  };
  return (
    <div className="form" style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <ul>
          <li className="form-item">
            <label>
              Name of the Event:
              <input ref={nameRef} />
            </label>
          </li>
          <li className="form-item">
            <label>
              Type of Event:
              <select id="types" name="types" ref={typeRef}>
                <option value="Type1">Type1</option>
                <option value="Type2">Type2</option>
                <option value="Type3">Type3</option>
                <option value="Type4">Type4</option>
              </select>
            </label>
          </li>
          <li className="form-item">
            <label>
              Description:
              <br />
              <textarea ref={descriptionRef} />
            </label>
          </li>
          <li className="form-item">
            <label>
              Available Spots:
              <select id="spots" name="spots" ref={spotsRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
          </li>
        </ul>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostEvent;
