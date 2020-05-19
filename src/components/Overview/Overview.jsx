import React from "react";
import Chart from "./Chart";

const Overview = ({
  onsubmitFormOverview,
  onInputChangeCat1,
  onInputChangeCat2,
  chartData,
  chart,
  categorys,
  xData,
  xLabels,
}) => {
  return (
    <div className="container">
      <h1>Overbiew</h1>
      <form
        class="form-inline container w-75"
        onSubmit={(event) => {
          onsubmitFormOverview(event);
        }}
      >
        <label class="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          Monthor category
        </label>
        <select
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          onChange={(event) => {
            onInputChangeCat1(event);
          }}
        >
          <option selected>Choose...</option>
          <option value="month">month</option>
          <option value="Category">Category</option>
        </select>

        <label class="my-1 mr-2" htmlFor="inlineFormCustomSelectPref2">
          option 2
        </label>
        <select
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref2"
          onChange={(event) => {
            onInputChangeCat2(event);
          }}
        >
          <option selected></option>
          {categorys.map((ans) => {
            return <option value={ans}>{ans}</option>;
          })}
        </select>

        <button type="submit" class="btn btn-primary my-1">
          Submit
        </button>
      </form>
      <div>
        <Chart chart={chart} xData={xData} xLabels={xLabels} />
      </div>
    </div>
  );
};
export default Overview;
