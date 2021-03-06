import React, { useState } from "react";
import { connect } from "react-redux";
import { notifySuccess } from "../../Components/Toast/Toast";

import { Modal, Button } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";

export const Nominations = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const movieData = props.addNomination.addNomination;

  if (movieData.length === 5) {
    notifySuccess("Thank You!, you have selected 5 movies.");
  }

  let updatedData = "";
  if (movieData === undefined) {
    updatedData = [{ title: "", image: "", year: "" }];
  } else {
    updatedData = movieData;
  }

  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        style={{
          fontSize: "25px",
          color: "#FFFFFF",
          textDecoration: "none",
        }}
      >
        {props.buttonName}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nominated Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingLeft: "11%",
            paddingRight: "11%",
          }}
        >
          {updatedData.map((movies) => (
            <MovieCard
              title={movies.title}
              image={movies.image}
              year={movies.year}
              button="Remove Nomination"
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ background: "#014C3E" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    addNomination: state,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nominations);
