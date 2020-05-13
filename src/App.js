import React, { Component } from "react";
import Login from "./components/Login/Login";
import "./App.css";

class App extends Component {
  onChangeInputName = (e) => {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  };
  onChangeInputPwd = (e) => {
    console.log(e.target.value);
    this.setState({ pwd: e.target.value });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  constructor() {
    super();
    this.state = {
      username: "",
      pwd: "",
    };
  }

  render() {
    return (
      <div className="App">
        <Login
          onChangeInputName={this.onChangeInputName}
          onChangeInputPwd={this.onChangeInputPwd}
          onSubmitForm={this.onSubmitForm}
        />
      </div>
    );
  }
}

export default App;
