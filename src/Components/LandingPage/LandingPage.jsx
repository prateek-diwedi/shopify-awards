import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { connect } from "react-redux";

export const LandingPage = (props) => {
  const nominatedMovies = props.data.data;
  let updatedData = "";
  if (nominatedMovies === undefined) {
    updatedData = [{ title: "", image: "", year: "" }];
  } else {
    updatedData = nominatedMovies.Search;
  }

  return (
    <div
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
          title={movies.Title}
          image={movies.Poster}
          year={movies.Year}
          button="Nominate"
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
