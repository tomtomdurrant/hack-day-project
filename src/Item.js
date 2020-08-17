import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

export default class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    alertURL: PropTypes.string,
    riskStatement: PropTypes.string,
    created: PropTypes.string,
  };

  render() {
    const cardStyle = {
      width: "50rem",
      height: "100%",
      margin: "2rem auto",
    };
    return (
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title href={this.props.alertURL}>{this.props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.props.created}
          </Card.Subtitle>
          <Card.Subtitle>{this.props.problem[0].riskStatement}</Card.Subtitle>
          <ul>
            {this.props.problem[0].allergen &&
              Object.keys(this.props.problem[0].allergen).map((index) => (
                <li key={index}>
                  {this.props.problem[0].allergen[index].label}
                </li>
              ))}
          </ul>
          <Card.Link target="_blank" href={this.props.alertURL}>
            {this.props.alertURL}
          </Card.Link>
        </Card.Body>
      </Card>
    );
  }
}
