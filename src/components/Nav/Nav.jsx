import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
      <a class="navbar-brand" href="#">
        Expense Trccker
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav">
          {/* <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li> */}
          <Link to="/" class="nav-item nav-link">
            Home
          </Link>
          {/* <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
           
          </li> */}
          <Link to="/overview" class="nav-item nav-link">
            Overview
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
