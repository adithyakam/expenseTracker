import React from "react";
// import { Form, Button } from "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Form, Container, Col } from "react-bootstrap";

const Register = ({ onChangeInputName, onChangeInputPwd, onSubmitForm }) => {
  return (
    <Container>
      <h1>Register</h1>
      <Form
        className="Container"
        onSubmit={(event) => {
          onSubmitForm(event);
        }}
      >
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(event) => {
                onChangeInputName(event);
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => {
                onChangeInputPwd(event);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 6, offset: 3 }}>
            <Button type="submit">Register</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Register;
