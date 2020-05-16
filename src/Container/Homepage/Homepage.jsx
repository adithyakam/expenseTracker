import React, { Component } from "react";
// import { Form, Button } from "bootstrap/dist/css/bootstrap.min.css";
import Input from "../../components/Input/Input";
import Cards from "../../components/Card/Card";
import Nav from "../../components/Nav/Nav";
import Overview from "../../components/Overview/Overview.jsx";

import { Switch, Route, Link } from "react-router-dom";

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
        {
          amt: this.state.amt,
          category: this.state.category,
          date: new Date(),
        },
      ],
    }));
  };

  onInputChangeCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  onInputChangeAmt = (e) => {
    this.setState({ amt: e.target.value });
  };

  onRemoveCard = (date) => {
    console.log("del");

    this.state.listAll.map((ele) => {
      if (ele.date === date) {
        console.log(ele.category);
      }
    });
  };

  render() {
    return (
      <div>
        <Nav />

        <Route
          exact
          path="/"
          render={() => (
            <Input
              onsubmitForm={this.onsubmitForm}
              onInputChangeAmt={this.onInputChangeAmt}
              onInputChangeCategory={this.onInputChangeCategory}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Cards
              listAll={this.state.listAll}
              onRemoveCard={this.onRemoveCard}
            />
          )}
        />
        <Route exact path="/overview" render={Overview} />

        {/* 
        <Input
          onsubmitForm={this.onsubmitForm}
          onInputChangeAmt={this.onInputChangeAmt}
          onInputChangeCategory={this.onInputChangeCategory}
        />
        <Cards listAll={this.state.listAll} /> */}
      </div>
    );
  }
}

export default Homepage;
