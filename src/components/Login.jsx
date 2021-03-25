import React, { useState, useEffect, useRef } from "react";
import { axios } from "./axios/axios";
import Cookies from "js-cookie";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const togglePassword = async () => {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    const object = {
      user: userRef.current.value,
      password: passwordRef.current.value,
    };

    let config = {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Expose-Headers": "Authorization"
      },
    };

    let res = await axios.post("/login", object, config);
    // let authheader = res.headers.get("Authorization");
    // console.log(authheader);
    console.log(res.headers);
    if (res.status === 200) {
      
      Cookies.set("user", res.data);
      console.log("aici" + res);
      console.log()
      alert("Login successful!");
      // window.location.href = "http://localhost:3000/";
      return true;
    } else {
      console.log("aici nu ");
      console.log(res);
      alert("Login not successful!");
      return false;
    }
  };

  return (
    <div className="form" style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <ul>
          <li className="form-item">
            <label>
              Username
              <input ref={userRef} />
            </label>
          </li>
          <li className="form-item">
            <label>
              Password
              <input type="password" id="password" ref={passwordRef} />
            </label>
          </li>
          <br />
          <label style={{ position: "relative", right: "52px" }}>
            Show Password
            <input type="checkbox" onClick={togglePassword} />
          </label>
        </ul>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
