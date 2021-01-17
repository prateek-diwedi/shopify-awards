import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieCard({ title, image, year }) {
  return (
    <div style={{ paddingTop: "3%" }}>
      {title === undefined ? null : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{year}</Card.Text>

            <Button variant="primary">Nominate</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default MovieCard;
