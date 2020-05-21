import React, { Component } from "react";
import Login from "./components/Login/Login";
import Homepage from "./Container/Homepage/Homepage";
import "./App.css";
const link = "http://localhost:4000/";

class App extends Component {
  onChangeInputName = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangeInputPwd = (e) => {
    this.setState({ pwd: e.target.value });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.username);

    fetch(`${link}\login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.pwd,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          fetch(`${link}\items`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: this.state.username,
            }),
          })
            .then((response) => response.json())
            .then((user) => {
              const nn = new Set();
              for (let a of user) {
                nn.add(a.category);
              }
              this.setState(Object.assign(this.state.category, [...nn]));
            });

          fetch(`${link}\getAmount`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: this.state.username,
              date: new Date().getMonth() + 1,
            }),
          })
            .then((response) => response.json())
            .then((amt) => {
              let tamt = 0;
              amt.forEach((ele) => {
                tamt = tamt + Number(ele.amount);
              });
              this.setState({ tAmount: tamt });

              this.setState(Object.assign(this.state.payslip, [...amt]));

              console.log(this.state.tAmount);
            });

          this.setState({ route: "homepage" });
        }
      });
  };

  constructor() {
    super();
    this.state = {
      username: "",
      pwd: "",
      route: "login",
      category: [],
      payslip: [],
      tAmount: 0,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.route !== "login" ? (
          <Homepage
            username={this.state.username}
            category={this.state.category}
            payslip={this.state.payslip}
            tAmount={this.state.tAmount}
          />
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
