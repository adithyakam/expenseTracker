import React, { Component } from "react";
import LoginMainPage from "../Login/LoginMainPage";
import RegisterMainPage from "../Register/RegisterMainPage";
import "./initialPage.css";

class InitialPage extends Component {
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
      <div className="loginn ">
        <div className=" bg-light">
          {this.state.route == "home" ? (
            <div>
              {console.log(this.state.route, "rr")}
              <h1>Welcome to Expense Tracker</h1>
              <button
                className="bg-primary m-2 p-1"
                onClick={() => {
                  this.routeTO("login");
                }}
              >
                login
              </button>
              <button
                className="bg-primary m-2 p-1"
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
      </div>
    );
  }
}

export default InitialPage;
