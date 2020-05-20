import React, { Component } from "react";
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
      data: {},
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
    console.log("submitted");

    var xVarData = [];
    var xVarLabels = [];

    // this.setState({ xData: [] }, () => {
    //   console.log("SD");
    // });
    // this.setState({ xLabels: [] }, () => {
    //   console.log("SD");
    // });

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
        data.forEach((ele) => {
          if (this.state.cat1 == "Category" && this.state.cat2 == "") {
            console.log("in");

            xVarLabels.push(ele.category);
          } else {
            console.log("in2");

            xVarLabels.push(ele.date_part);
          }

          xVarData.push(ele.sum);
        });

        console.log("before datasetState", this.state.xData, xVarData);
        console.log("before chrt setState", this.state.chartData, data);

        console.log("before labels setState", this.state.xLabels, xVarLabels);
        this.setState({
          chartData: data,
          xData: xVarData,
          xLabels: xVarLabels,
          data: {
            labels: xVarLabels,
            datasets: [
              {
                label: "Amount",
                data: xVarData,
                fill: true, // Don't fill area under the line
                borderColor: "green", // Line color
              },
            ],
          },
        });

        this.setState(
          {},
          console.log(
            "after setState",
            this.state.xData,
            this.state.xLabels,
            this.state.chartData
          )
        );
        this.setState({ chart: true }, () => {
          "trueed";
        });
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
              data={this.state.data}
            />
          )}
        />
      </div>
    );
  }
}

export default Homepage;
