import React, { Component } from "react";
// import { Form, Button } from "bootstrap/dist/css/bootstrap.min.css";
import Input from "../../components/Input/Input";
import Cards from "../../components/Card/Card";
import Nav from "../../components/Nav/Nav";
import Overview from "../../components/Overview/Overview.jsx";

import { Switch, Route, Link } from "react-router-dom";
const link = "http://localhost:4000/";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      amount: 0,
      listAll: this.props.payslip,
      totalIncome: 0,
      username: this.props.username,
      categorys: this.props.category,
      payslip: this.props.payslip,
      chart: false,
      cat1: "",
      cat2: "",
      chartData: [],
      xData: [],
      xLabels: [],
    };
  }
  onsubmitForm = (e) => {
    e.preventDefault();

    fetch(`${link}\Amount`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.username,
        amount: this.state.amount,
        category: this.state.category,
        date: new Date(),
      }),
    }).then((res) => res.json());

    this.setState((prevState) => ({
      listAll: [
        ...prevState.listAll,
        {
          email: this.state.username,
          amount: this.state.amount,
          category: this.state.category,
          date: new Date(),
        },
      ],
    }));
  };

  onsubmitFormOverview = (e) => {
    e.preventDefault();

    fetch(`${link}\overview`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cat1: this.state.cat1,
        cat2: this.state.cat2,
        email: this.state.username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // this.setState((prevState) => ({
        //   chartData: [prevState.chartData, ...data],
        // }));
        this.setState(Object.assign(this.state.chartData, [...data]));
        // console.log(this.state.chartData);
        var xVarData = [];
        var xVarLabels = [];

        data.forEach((ele) => {
          xVarLabels.push(ele.date_part);
          xVarData.push(ele.sum);
        });

        this.setState(Object.assign(this.state.xData, [...xVarData]));
        this.setState(Object.assign(this.state.xLabels, [...xVarLabels]));
        this.setState({ chart: true }, () => {
          "trueed";
        });

        // console.log(this.state.chart);
      });
  };

  onInputChangeCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  onInputChangeCat1 = (e) => {
    this.setState({ cat1: e.target.value });
  };

  onInputChangeCat2 = (e) => {
    this.setState({ cat2: e.target.value });
  };

  onInputChangeAmt = (e) => {
    this.setState({ amount: e.target.value });
  };

  onRemoveCard = (date) => {
    console.log("del");

    this.state.listAll.map((ele) => {
      if (ele.date === date) {
        // console.log(ele.category);
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
              payslip={this.state.payslip}
            />
          )}
        />
        <Route
          exact
          path="/overview"
          render={() => (
            <Overview
              onsubmitFormOverview={this.onsubmitFormOverview}
              onInputChangeCat1={this.onInputChangeCat1}
              onInputChangeCat2={this.onInputChangeCat2}
              chartData={this.state.chartData}
              chart={this.state.chart}
              categorys={this.state.categorys}
              xData={this.state.xData}
              xLabels={this.state.xLabels}
            />
          )}
        />
      </div>
    );
  }
}

export default Homepage;
