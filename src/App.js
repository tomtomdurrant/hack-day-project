import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Router from "./Router";

export default class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Food Alerts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="signup">Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Router />
      </div>
    );
  }
}
