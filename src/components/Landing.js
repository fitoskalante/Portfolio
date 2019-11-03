import React from "react";
import { Button } from "react-bootstrap";
import SocialIcons from "./SocialIcons.js";
import { ReactComponent as ImgTest3 } from "./img/test3.svg";
import { Link } from "react-scroll";

export default function Landing() {
  return (
    <div className="container-fluid bg-warning flex-column align-items-center text-center justify-content-center d-flex vh-100 py-5">
      <ImgTest3
        className="mb-3 animated bounceIn"
        style={{
          minWidth: "315px !important",
          maxWidth: "500px",
          height: "auto"
        }}
      />

      <div className="">
        <h1 className="display-5">
          Hello!, I'm <span className="text-white"> Ricardo Cuevas </span>
        </h1>
        <h3>I'm a Front-End Developer & Designer</h3>
        <SocialIcons />
      </div>
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
        <Button
          className="text-dark font-weight-bold"
          variant="light"
          size="lg"
        >
          View Projects
        </Button>
      </Link>
    </div>
  );
}
