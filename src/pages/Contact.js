import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Container from "../components/Container";
import Header from "../components/Header";
import Col from "../components/Col";

function Contact() {
  return (
    <div>
      <Header backgroundImage="https://www.dropbox.com/s/zmfrn92tpve454b/background.jpeg?dl=0">
        <h2>Find me on social media!</h2>
      </Header>
      <Container style={{ marginTop: 30 }}>
        <div className="row">
          <Col size="md-12">
          <p className="text-center">
          <FontAwesomeIcon icon={faLinkedin} /> caroline-manson19
          </p>
            <p className="text-center">
            <FontAwesomeIcon icon={faGithub} /> carolinem15
            </p>
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
