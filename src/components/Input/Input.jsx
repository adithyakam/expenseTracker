import React from "react";
import { Container } from "react-bootstrap";

const Input = ({ onsubmitForm, onInputChangeAmt, onInputChangeCategory }) => {
  return (
    <Container className="container">
      <h1>Expense Trccker</h1>
      <form onSubmit={onsubmitForm}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInput">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Category"
              onChange={(event) => {
                onInputChangeCategory(event);
              }}
            />
          </div>
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInputGroup">
              Username
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Amount"
                onChange={(event) => {
                  onInputChangeAmt(event);
                }}
              />
            </div>
          </div>
          <div class="col-auto"></div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Input;
