import React, { useState } from "react";
import "./searchbox.css";
import { Button } from "react-bootstrap";

import { connect } from "react-redux";
import { movieName } from "../../redux/actions/actions";

function SearchBar(props) {
  const [state, setState] = useState("");

  const onChange = (event) => {
    setState(event.target.value);
  };
  const submitForm = (event) => {
    const value = state;
    event.preventDefault();

    props.changeName(value);
  };

  return (
    <div className="searchbox-wrap">
      <form onSubmit={submitForm} className="searchbox_form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="searchbox"
          value={state}
          onChange={onChange}
        />
        <Button
          variant="secondary"
          onClick={submitForm}
          style={{
            background: "#014C3E",
            alignItems: "center",
            borderRadius: "8px",
            marginLeft: "5%",
          }}
        >
          {" "}
          Search{" "}
        </Button>
      </form>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch(movieName(name));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(SearchBar);
