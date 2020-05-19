import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: this.props.chart,
      chartData: this.props.chartData,
      xData: this.props.xData,
      xLabels: this.props.xLabels,

      data: {
        labels: this.props.xLabels,
        datasets: [
          {
            label: "Temperature",
            data: this.props.xData,
            fill: true, // Don't fill area under the line
            borderColor: "green", // Line color
          },
        ],
      },
    };
  }

  render() {
    return this.props.chart ? (
      <div>
        <Line data={this.state.data} />
      </div>
    ) : (
      <h1>no data toshow</h1>
    );
  }
}

export default Chart;
