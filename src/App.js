import React, { Component } from "react";
import Login from "./components/Login/Login";
import Homepage from "./Container/Homepage/Homepage";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  onChangeInputName = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangeInputPwd = (e) => {
    this.setState({ pwd: e.target.value });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ route: "homepage" });
  };

  constructor() {
    super();
    this.state = {
      username: "",
      pwd: "",
      route: "login",
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.route !== "login" ? (
          <Homepage />
        ) : (
          <Login
            onChangeInputName={this.onChangeInputName}
            onChangeInputPwd={this.onChangeInputPwd}
            onSubmitForm={this.onSubmitForm}
          />
        )}
      </div>
    );
  }
}

export default App;
