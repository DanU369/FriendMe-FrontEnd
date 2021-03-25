import React from "react";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar-brand" to="/">
        Home
      </NavLink>
      <NavLink className="navbar-brand" to="/post">
        Post Event
      </NavLink>
      <NavLink className="navbar-brand" to="/events">
        Events
      </NavLink>
      <NavLink className="navbar-brand" to="/login">
        Login
      </NavLink>
      <NavLink className="navbar-brand" to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default Navbar;
