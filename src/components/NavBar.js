import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo-fr.png";
import styles from "../styles/NavBar.module.css" ;

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link id={styles.NavText}>
              Home
            </Nav.Link>
            <Nav.Link id={styles.NavText}>
              Sign in
            </Nav.Link>
            <Nav.Link id={styles.NavText}>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;