import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import testImage from "./img/templateProject.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function Projects() {
  return (
    <div
      className="container-fluid d-flex align-items-center bg-light py-5"
      id="projects"
    >
      <col className=" d-none d-md-block col-md-1" />
      <div className="container-fluid d-flex flex-column align-items-center mt-5 col-md-10">
        <ScrollAnimation animateIn="fadeIn">
          <CardDeck className="my-3">
            <Card bg="white" text="dark" className="card-style mb-3 shadow">
              <Card.Img variant="top" src={testImage} fluid />
              <Card.Body>
                <Card.Title>Weather-App title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-style mb-3 shadow">
              <Card.Img variant="top" src={testImage} fluid />
              <Card.Body>
                <Card.Title>Tic-Tac-Toe</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <CardDeck className="my-3">
            <Card className="card-style mb-3 shadow">
              <Card.Img variant="top" src={testImage} fluid />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-style mb-3 shadow">
              <Card.Img variant="top" src={testImage} fluid />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </ScrollAnimation>
      </div>
      <h1 className="section-name d-none d-md-block col-md-1">Projects</h1>
    </div>
  );
}
