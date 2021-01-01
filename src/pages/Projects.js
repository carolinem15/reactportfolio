import React from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";



function Projects() {
  return (
    <div>
      <Hero backgroundImage="https://www.dropbox.com/s/zmfrn92tpve454b/background.jpeg?dl=0">
        <h1>Caroline Manson</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Find me on social media!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p>
           caroline-manson19
          </p>
            <p>
            carolinem15
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;