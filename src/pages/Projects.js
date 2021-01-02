import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Row from "../components/Row";
import Col from "../components/Col";

function Projects() {
  return (
    <div>
      <Header backgroundImage="https://www.dropbox.com/s/zmfrn92tpve454b/background.jpeg?dl=0">
        <h1>Caroline Manson</h1>
      </Header>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-4">
            <h1>README Generator</h1>
            <p>This is a README generator that uses Inquirer.js to ask the user a series of questions regarding their README content, and then generates a Markdown file in your project directory.</p>
            <a 
            className="Link"
            href="https://github.com/carolinem15/README-generator"
            >
              Check it out
            </a>
          </Col>
          <Col size="md-4">
            <h1>Take Notes</h1>
            <p>This is a note taking application that uses Node.js and Express.js to input, save, and delete notes.</p>
          </Col>
          <Col size="md-4">
            <h1>Cocktail Me!</h1>
            <p>This is a collaborative project that allows the user to peruse a database of cocktails and make their own recipes. The user can also save drinks and randomly generate drinks. This application uses MySQL, Express.js, and Handlebars.</p>
          </Col>
        </Row>
        <Row>
        <Col size="md-4">
            <h1>Template Engine</h1>
            <p>This is a command line application that uses Inquirer.js, Node.js file system, and class constructors to build an office with all of your coworkers' information.</p>
        </Col>
        <Col size="md-4">
            <h1>Random Password Generator</h1>
            <p>This is a simple but beautiful Javascript application that randomly generates passwords based on criteria set by the user.</p>
          </Col>
          <Col size="md-4">
            <h1>Employee Tracker</h1>
            <p>This is a project that uses a SQL database and Inquirer.js to manage employees, their roles, and departments.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;