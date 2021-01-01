import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero >
        <h1>Caroline Manson</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Hello!</h1>
          </Col>
        </Row>
        <Row>
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
        </Row>
      </Container>
    </div>
  );
}

export default About;
