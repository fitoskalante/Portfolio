import React from "react";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  Form,
  FormGroup
} from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <div
        className="container-fluid d-flex bg-dark py-5 justify-content-center"
        id="contact"
      >
        <div className="shadow bg-warning col-md-6 p-5">
          <h3 className="py-5 text-center">
            Have a question or want to work together?
          </h3>
          <Form>
            <Form.Control
              className="input-contact mb-3"
              type="text"
              placeholder="Name"
            />
            <Form.Control
              className="input-contact mb-3 "
              type="email"
              placeholder="Enter email"
            />
            <FormControl
              className="input-contact mb-3"
              as="textarea"
              rows="5"
              aria-label="With textarea"
              placeholder="Your Message"
            />
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
