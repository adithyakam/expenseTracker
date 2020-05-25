import React, { Component } from "react";
import Register from "../../components/Register/Register";
import Homepage from "../../Container/Homepage/Homepage";
import Login from "../Login/LoginMainPage";
// import Register from "./Register";
const link = "http://localhost:4000/";

class RegisterMainPage extends Component {
  onChangeInputName = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangeInputPwd = (e) => {
    this.setState({ pwd: e.target.value });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.username);

    fetch(`${link}\Register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.pwd,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user === "added successfully") {
          this.setState({ route: "Login" });
        } else {
          console.log("not add");
        }
      });
  };

  constructor() {
    super();
    this.state = {
      username: "",
      pwd: "",
      route: "register",
      category: [],
      payslip: [],
      tAmount: 0,
    };
  }

  render() {
    return (
      <div>
        {this.state.route !== "register" ? (
          <Login />
        ) : (
          <Register
            onChangeInputName={this.onChangeInputName}
            onChangeInputPwd={this.onChangeInputPwd}
            onSubmitForm={this.onSubmitForm}
          />
        )}
      </div>
    );
  }
}

export default RegisterMainPage;
