import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const style = {
  display: "flex",
  justifyContent: "flex-end",
};

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PROSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse style={style} id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features">
                <i className="fas fa-shopping-cart"></i> CART
              </Nav.Link>

              <Nav.Link href="#pricing">
                <i className="fas fa-user"></i> SIGN IN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
