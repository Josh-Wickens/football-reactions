import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo-fr.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container fluid>
        <NavLink to="/"><Navbar.Brand>
          <img src={logo} alt="logo" height="50" />
        </Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              Home
            </NavLink>
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/signin">
              Sign in
            </NavLink>
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/signup">
              Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;