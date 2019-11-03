import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

export default function Navibar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="py-4 ml-0 pl-0"
      sticky="top"
      style={{
        backgroundColor: "#ffc107",
        borderBlockEnd: "8px solid black"
      }}
    >
      <Navbar.Brand
        className="font-weight-bold"
        href="#home"
        style={{
          backgroundClip: "content-box",
          backgroundColor: "black",
          color: "#ffc107"
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RC=>(Dev+Design)
      </Navbar.Brand>
      <Navbar.Toggle
        className="btn-primary"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="pl-4 ml-md-auto">
          <Link
            className="mx-5"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={600}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            <strong>Projects</strong>
          </Link>

          <Link
            className="mx-5"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={600}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            <strong>About me</strong>
          </Link>

          <Link
            className="mx-5"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={600}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            <strong>Contact</strong>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
