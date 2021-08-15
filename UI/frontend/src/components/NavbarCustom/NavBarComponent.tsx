import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavBarCustom extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" fixed="top" sticky="top" variant="dark">
        <Navbar.Brand href="/">NFT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container style={{ marginLeft: "120px" }}>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>{" "}
              <Nav.Link href="/assets">Assets</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
          <Container>
            <Form inline style={{ width: "100%" }}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                style={{ width: "60%" }}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Container>
          {/* <Container> */}

          {/* </Container> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBarCustom;
