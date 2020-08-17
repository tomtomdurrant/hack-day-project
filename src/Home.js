import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import Item from "./Item";
import EditAlert from "./EditAlert";
import { sampleData } from "./sample-data";
import { sortByDate } from "./helpers";

export default class Home extends Component {
  state = {
    data: [],
  };

  resetData = () => {
    this.setState({ data: [] });
  };

  updateData = (data) => {
    const sortedData = data.sort(sortByDate);
    this.setState({ data: sortedData });
    console.log("updateData Called!");
  };

  getData = () => {
    const url = "https://data.food.gov.uk/food-alerts/id?problem.allergen=nuts";
    axios.get(url).then((response) => {
      const data = response.data.items.sort(sortByDate);
      this.setState({ data });
      console.log(data);
    });
  };

  getSampleData = () => {
    console.log("getSampleData Called");
    const first2 = sampleData.sort(sortByDate);
    this.setState({ data: first2 });
    console.log(first2);
  };
  render() {
    return (
      <div>
        <EditAlert updateData={this.updateData} />
        <Container style={{ margin: "2rem 0" }}>
          <Button onClick={() => this.getSampleData()}>Get Sample Data</Button>
          <Button
            style={{ marginLeft: "2rem" }}
            onClick={() => this.resetData()}
            variant="outline-warning"
          >
            Clear Data
          </Button>
        </Container>
        <ul>
          {this.state.data.map((item) => {
            return (
              <Item
                key={item["@id"]}
                title={item.title}
                problem={item.problem}
                alertURL={item.alertURL}
                created={item.created}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
