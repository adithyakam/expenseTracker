import React from "react";
import { Bar } from "react-chartjs-2";

const Overview = ({
  onsubmitFormOverview,
  onInputChangeCat1,
  onInputChangeCat2,
  categorys,
  chart,
}) => {
  return (
    <div className="container">
      return <h1>Overbiew</h1>;
      <form
        class="form-inline container w-75"
        onSubmit={(event) => {
          onsubmitFormOverview(event);
        }}
      >
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
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

        <label class="my-1 mr-2" for="inlineFormCustomSelectPref2">
          option 2
        </label>
        <select
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref2"
          onChange={(event) => {
            onInputChangeCat2(event);
          }}
        >
          <option selected>Choose...</option>
          {categorys.map((ans) => {
            return <option value={ans}>{ans}</option>;
          })}
        </select>

        <button type="submit" class="btn btn-primary my-1">
          Submit
        </button>
      </form>
      {/* {chart ? (
        <div>
          <Bar
            data={(1, 2, 3)}
            width={100}
            height={50}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      ) : (
        <div></div>
      )} */}
    </div>
  );
};
export default Overview;
