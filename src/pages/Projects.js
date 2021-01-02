import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Col from "../components/Col";
import Project from "../components/Project";

function Projects() {
  return (
    <div>
      <Header backgroundImage="https://www.dropbox.com/s/zmfrn92tpve454b/background.jpeg?dl=0">
        <h2>Featured Projects</h2>
      </Header>
      <Container style={{ marginTop: 30 }}>
        <div className="row">
          <Col size="md-4">
          <Project
          title="README Generator"
          text="This is a README generator that uses Inquirer.js to ask the user a series of questions regarding their README content, and then generates a Markdown file in your project directory."
          link="https://github.com/carolinem15/README-generator"
          >
          </Project>
          </Col>
          <Col size="md-4">
          <Project
          title="Take Notes"
          text="This is a note taking application that uses Node.js and Express.js to input, save, and delete notes."
          link="https://github.com/carolinem15/takenotes"
          >
          </Project>
          </Col>
          <Col size="md-4">
          <Project
          title="Cocktail Me!"
          text="This is a collaborative project that allows the user to peruse a database of cocktails and make their own recipes. The user can also save drinks and randomly generate drinks. This application uses MySQL, Express.js, and Handlebars."
          link="https://github.com/crystalcrandall92/Cocktail-Me"
          >
          </Project>
          </Col>
        </div>
        <div className="row">
        <Col size="md-4">
        <Project
          title="Template Engine"
          text="This is a command line application that uses Inquirer.js, Node.js file system, and class constructors to build an office with all of your coworkers' information."
          link="https://github.com/carolinem15/teambuilder"
          >
          </Project>
        </Col>
        <Col size="md-4">
        <Project
          title="Random Password Generator"
          text="This is a simple but beautiful Javascript application that randomly generates passwords based on criteria set by the user."
          link="https://github.com/carolinem15/randompass"
          >
          </Project>
          </Col>
          <Col size="md-4">
          <Project
          title="Employee Tracker"
          text="This is a project that uses a SQL database and Inquirer.js to manage employees, their roles, and departments."
          link="https://github.com/carolinem15/companyroster"
          >
          </Project>
          </Col>
        </div>
      </Container>
    </div>

  );
}

export default Projects;