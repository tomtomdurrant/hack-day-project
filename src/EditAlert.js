import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const baseURL = "https://data.food.gov.uk/food-alerts/id";

export default class EditAlert extends Component {
  supermarketRef = React.createRef();
  celeryRef = React.createRef();
  crustaceansRef = React.createRef();
  handleSubmit = async (event) => {
    event.preventDefault();
    let extra = {};
    let supermarket = this.supermarketRef.current.value;
    console.log(`Getting data from ${supermarket}`);
    if (supermarket === "All") {
      supermarket = "";
    }
    // let celeryRef = this.celeryRef.current.value;
    // if (celeryRef === "on") {
    //   extra.search = "celery";
    // }
    // let crustaceansRef = this.crustaceansRef.current.value;
    // if (crustaceansRef === "on") {
    //   extra.search = "crustaceans";
    // }

    try {
      const request = await axios.get(baseURL, {
        params: {
          type: "AA",
          commonName: supermarket,
          ...extra,
        },
      });
      console.log(request);

      this.props.updateData(request.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
              <Form.Group
                controlId="selectSuperMarket"
                style={{ width: "25%" }}
              >
                <Form.Label>Supermarket</Form.Label>
                <Form.Control as="select" ref={this.supermarketRef}>
                  <option name="All" value="All">
                    All
                  </option>
                  <option name="Tesco" value="Tesco">
                    Tesco
                  </option>
                  <option name="Asda" value="Asda">
                    Asda
                  </option>
                  <option name="Waitrose" value="Waitrose">
                    Waitrose
                  </option>
                  <option name="Lidl" value="Lidl">
                    Lidl
                  </option>
                  <option name="Sainsbury's" value="Sainsbury's">
                    Sainsbury's
                  </option>
                  <option name="Marks & Spencer" value="Marks & Spencer">
                    Marks & Spencer
                  </option>
                </Form.Control>
              </Form.Group>
              {/* <Form.Group controlId="allergens">
                <Form.Check
                  inline
                  label="celery"
                  type="checkbox"
                  id="celery"
                  ref={this.celeryRef}
                />
                <Form.Check
                  inline
                  label="crustaceans"
                  type="checkbox"
                  id="crustaceans"
                  ref={this.crustaceansRef}
                />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Col>
      </Container>
    );
  }
}
