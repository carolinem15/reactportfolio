import React from "react";
import Card from 'react-bootstrap/Card';

const styles = {
    footerStyle: {
        background: "lavender",
        textAlign: "center",
        left: 0,
        bottom: 0
    }
};

function Project(props) {
  return (
    <Card >
        <Card.Body >
            <Card.Title >
                <h1>{props.title}</h1>
            </Card.Title>
            <Card.Text >
                <p>{props.text}</p>
            </Card.Text>
            <Card.Link href={props.link}>
                Check it out
            </Card.Link>
        </Card.Body>
    </Card>
  );
}

export default Project;
