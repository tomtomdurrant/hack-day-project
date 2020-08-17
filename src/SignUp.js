import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class SignUp extends Component {
  state = {
    email: "",
  };
  /**
   * @param {Event} event
   */
  handleSubmit = async (event) => {
    event.preventDefault();
    const body = this.state.email;
    console.log(body);
    try {
      await axios.post("http://localhost:5000", body);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  handleChange = (event) => {
    const updatedState = {
      ...this.state,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    this.setState(updatedState);
  };

  emailIsValid = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(this.state.email);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            So we can email you alerts.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="allergens">
          <Form.Check inline label="celery" type="checkbox" id="celery" />
          <Form.Check
            inline
            label="crustaceans"
            type="checkbox"
            id="crustaceans"
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!this.emailIsValid()}>
          Submit
        </Button>
      </Form>
    );
  }
}
