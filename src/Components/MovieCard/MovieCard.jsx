import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { nomination, removeNomination } from "../../redux/actions/actions";

function MovieCard({
  title,
  image,
  year,
  nominate,
  removeNominatedMovie,
  button,
}) {
  const nominateMovie = () => {
    nominate(title, image, year);
  };

  const removeNomination = () => {
    removeNominatedMovie(title, year);
  };
  return (
    <div style={{ paddingTop: "3%" }}>
      {title === undefined ? null : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{year}</Card.Text>
            {button === "Remove Nomination" ? (
              <Button
                variant="primary"
                onClick={removeNomination}
                style={{ background: "#d31b03" }}
              >
                {button}
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={nominateMovie}
                style={{ background: "#014C3E" }}
              >
                {button}
              </Button>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    nominate: (title, image, year) => {
      dispatch(nomination(title, image, year));
    },
    removeNominatedMovie: (title, year) => {
      dispatch(removeNomination(title, year));
    },
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
