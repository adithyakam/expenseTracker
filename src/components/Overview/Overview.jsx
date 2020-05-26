import React from "react";
import Chart from "./Chart";
import "../../App.css";

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
      <div className="form-inline justify-content-around">
        <h1>Overview</h1>
        <h3
          data-toggle="tooltip"
          title="*To get the chart per month select month &#013;
                *To get chart category-wise select category &#013;
                *To get category wise data per month select category then chechbox and pick a category in dropdown "
        >
          help?
        </h3>
      </div>
      <form
        className="form container w-75 form-row"
        onSubmit={(event) => {
          onsubmitFormOverview(event);
        }}
      >
        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          Monthor category
        </label>
        <select
          className="custom-select my-1 mr-sm-2 col-auto"
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

        <div className="form-check mx-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={() => onSelectedChange()}
            disabled
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out to enter category
          </label>
        </div>
        <br />
        <label
          className="my-1 mr-2 col-auto"
          htmlFor="inlineFormCustomSelectPref2"
        >
          Category
        </label>
        <select
          className="custom-select my-1 mr-sm-2 chkbox col-auto"
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

        <button type="submit" className="btn btn-primary my-1">
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
