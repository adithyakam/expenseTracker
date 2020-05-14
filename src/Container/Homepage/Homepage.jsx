import React, { Component } from "react";
// import { Form, Button } from "bootstrap/dist/css/bootstrap.min.css";
import Input from "../../components/Input/Input";
import Cards from "../../components/Card/Card";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      amt: 0,
      listAll: [],
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
      <div className="container">
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
