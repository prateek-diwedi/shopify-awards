import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { connect } from "react-redux";

export const LandingPage = (props) => {
  const [data, setData] = useState([]);

  const movieData = props.data.data;
  let updatedData = "";
  if (movieData === undefined) {
    updatedData = [{ title: "", image: "", year: "" }];
  } else {
    updatedData = movieData.Search;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      {updatedData.map((movies) => (
        <MovieCard
          title={movies.Title}
          image={movies.Poster}
          year={movies.Year}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
