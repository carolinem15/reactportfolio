import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Header >
      </Header>
      <Container style={{ marginTop: 30 }}>
        <div className="row">
          <Col size="md-12">
            <h1>Hello!</h1>
          </Col>
        </div>
        <div className="row">
          <Col size="md-12">
            <p>
              My name is Caroline Manson.
            </p>
            <p>
              I recently graduated from University of Colorado at Boulder and I currently work at the Humane Society of Charlotte. I am a budding full stack developer with an interest in UI/UX development.
            </p>
            <p>
              Welcome to my portfolio.
            </p>
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default About;
