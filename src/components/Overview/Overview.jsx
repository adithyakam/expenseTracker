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
  data,
}) => {
  const onSelectedChange = () => {
    console.log(document.getElementById("exampleCheck1").checked, "dss");
    console.log(
      document.getElementById("inlineFormCustomSelectPref2").disabled,
      "dss2"
    );
    if (document.getElementById("exampleCheck1").checked) {
      document.getElementById("inlineFormCustomSelectPref2").disabled = false;
    } else {
      document.getElementById("inlineFormCustomSelectPref2").disabled = true;
    }
  };

  const onSelectedChange1 = (e) => {
    console.log(e.target.value, "dss");
    if (e.target.value === "Category") {
      document.getElementById("exampleCheck1").disabled = false;
    } else {
      document.getElementById("exampleCheck1").disabled = true;
      document.getElementById("inlineFormCustomSelectPref2").disabled = true;
    }
  };
  return (
    <div className="container">
      <h1>Overview</h1>
      <form
        class="form-inline container w-75"
        onSubmit={(event) => {
          onsubmitFormOverview(event);
        }}
      >
        <label class="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          Monthor category
        </label>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            onChange={() => onSelectedChange()}
            disabled
          />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <select
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref "
          onChange={(event) => {
            onInputChangeCat1(event);
            onSelectedChange1(event);
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
          class="custom-select my-1 mr-sm-2 chkbox"
          id="inlineFormCustomSelectPref2"
          onChange={(event) => {
            onInputChangeCat2(event);
          }}
          disabled
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
        <Chart chart={chart} xData={xData} xLabels={xLabels} data={data} />
      </div>
    </div>
  );
};
export default Overview;
