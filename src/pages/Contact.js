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
      <Header>
        <h2>Find me on social media!</h2>
      </Header>
      <Container style={{ marginTop: 30 }}>
        <div className="row">
          <Col size="md-12">
          <p className="text-center" >
          <FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/caroline-manson19">caroline-manson19</a>
          </p>
            <p className="text-center">
            <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/carolinem15">carolinem15</a>
            </p>
            <p className="text-center">carolinemanson15@gmail.com</p>
            <p className="text-center">615-495-7513</p>
            <p className="text-center"><a href="https://www.dropbox.com/s/68sq35hkedkfrqb/Caroline%27s%20Resume%20%284%29.pdf?dl=0">View my resume</a></p>
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
