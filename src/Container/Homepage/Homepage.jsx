import React, { Component } from "react";
// import { Form, Button } from "bootstrap/dist/css/bootstrap.min.css";
import Input from "../../components/Input/Input";
import Cards from "../../components/Card/Card";
import Nav from "../../components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    console.log(props);

    super();
    this.state = {
      category: "",
      amt: 0,
      listAll: [],
      totalIncome: 0,
    };
  }
  onsubmitForm = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      listAll: [
        ...prevState.listAll,
        { amt: this.state.amt, category: this.state.category },
      ],
    }));
  };

  onInputChangeCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  onInputChangeAmt = (e) => {
    this.setState({ amt: e.target.value });
  };

  render() {
    return (
      <div>
        <Nav />

        <Input
          onsubmitForm={this.onsubmitForm}
          onInputChangeAmt={this.onInputChangeAmt}
          onInputChangeCategory={this.onInputChangeCategory}
        />
        <Cards listAll={this.state.listAll} />
      </div>
    );
  }
}

export default Homepage;
