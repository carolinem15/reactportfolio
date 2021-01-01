import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.dropbox.com/s/zmfrn92tpve454b/background.jpeg?dl=0">
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
              I am a budding full stack developer.
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
