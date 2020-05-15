import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

const Input = ({
  onsubmitForm,
  onInputChangeAmt,
  onInputChangeCategory,
  InputGroup,
}) => {
  return (
    <Container className="container-fluid center">
      <div className="jumbotron ">
        <form
          onSubmit={(event) => {
            onsubmitForm(event);
          }}
          className="mx-auto w-50"
        >
          <div class="form-row align-items-center">
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInput">
                Name
              </label>
              <input
                type="text"
                class="form-control mb-2"
                id="inlineFormInput"
                placeholder="Jane Doe"
                onChange={(event) => {
                  onInputChangeCategory(event);
                }}
              />
            </div>
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Username
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">$</div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Username"
                  onChange={(event) => {
                    onInputChangeAmt(event);
                  }}
                />
              </div>
            </div>
            <div class="form-row ">
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Input;
