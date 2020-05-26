import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.chart ? (
      <div>
        <Bar data={this.props.data} redraw={true} responsive={true} />
      </div>
    ) : (
      <h3>no data toshow</h3>
    );
  }
}

export default Chart;
