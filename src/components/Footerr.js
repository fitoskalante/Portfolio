import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Footerr() {
  return (
    <Navbar
      className="justify-content-center"
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "black" }}
    >
      <Navbar.Brand href="#">
        <small> Copyright &copy; 2008 RC Dev & Design</small>
      </Navbar.Brand>
    </Navbar>
  );
}
