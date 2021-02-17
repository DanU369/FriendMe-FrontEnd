import React from "react";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Router>
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <NavLink
          className="navbar-brand"
          to="/post"
        >
          Post Event
        </NavLink>
        <NavLink className="navbar-brand" to="/events">
          Events
        </NavLink>
      </Router>
    </nav>
  );
};

export default Navbar;
