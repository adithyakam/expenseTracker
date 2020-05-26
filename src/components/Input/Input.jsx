import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

const Input = ({
  onsubmitForm,
  onInputChangeAmt,
  onInputChangeCategory,
  InputGroup,
  tAmount,
}) => {
  return (
    <Container className="container-fluid center">
      <div className="jumbotron ">
        <div className="form-row align-items-center mx-auto w-50">
          <div class="col-auto mx-auto">
            <label class="inputEmail4">Net Amount spent this month</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">$</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Amount"
                value={tAmount}
                disabled
              />
            </div>
          </div>
        </div>

        <form
          onSubmit={(event) => {
            onsubmitForm(event);
          }}
          className="mx-auto container w-50"
        >
          <div class="form-row align-items-center  mx-auto">
            <div class="col-auto">
              <label class="inputEmail4">Category</label>
              <input
                type="text"
                class="form-control mb-2"
                id="inlineFormInput"
                placeholder="Category"
                onChange={(event) => {
                  onInputChangeCategory(event);
                }}
              />
            </div>

            <div class="col-auto">
              <label class="inputEmail4">Amount</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">$</div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="positive numbers only"
                  pattern="\d+"
                  onChange={(event) => {
                    onInputChangeAmt(event);
                  }}
                />
              </div>
            </div>
            <div class="col-auto align-middle mx-auto">
              <button type="submit" class="btn btn-primary mb-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Input;
