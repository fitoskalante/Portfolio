import React from "react";
import { ReactComponent as ImgTest } from "./img/test1.svg";

export default function About() {
  return (
    <div
      className="container-fluid d-flex flex-row py-5 align-items-center"
      id="about"
    >
      <col className=" d-none d-md-block col-md-1" />
      <ImgTest className="col-5 py-3" style={{ maxHeight: "90vh" }} />
      <div className="col-5">
        <p className="paragraph-style">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          placeat velit ex doloribus corrupti, adipisci sunt vitae? Recusandae,
          odio omnis commodi sunt est hic nam tempora voluptas, iure non
          voluptatem!
        </p>
      </div>
      <h1 className="section-name d-none d-md-block col-md-1">About me</h1>
    </div>
  );
}
