import React, { Component } from "react";
import LoginMainPage from "./components/Login/LoginMainPage";
import RegisterMainPage from "./components/Register/RegisterMainPage";
// import { Switch, Route, Link } from "react-router-dom";

import Homepage from "./Container/Homepage/Homepage";
import "./App.css";
const link = "http://localhost:4000/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
    };
  }

  routeTO = (ele) => {
    this.setState({ route: ele });
  };

  render() {
    return (
      <div className="App">
        {this.state.route == "home" ? (
          <div>
            {console.log(this.state.route, "rr")}
            <h1>Welcome to Expense Trcker</h1>
            <button
              onClick={() => {
                this.routeTO("login");
              }}
            >
              login
            </button>
            <button
              onClick={() => {
                this.routeTO("Register");
              }}
            >
              Register
            </button>
          </div>
        ) : (
          <div>
            {console.log(this.state.route, "rr")}
            {this.state.route === "login" ? (
              <LoginMainPage />
            ) : (
              <RegisterMainPage />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
