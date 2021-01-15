import HomePage from "./Layouts/Home";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  console.log("f -->", props.fname);
  console.log("l -->", props.lname);
  return (
    <div className="App">
      <HomePage />
      <button
        onClick={() => {
          props.chnageName({ name: "Deepika", last: "Sharma" });
        }}
      >
        CHnage Name
      </button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    fname: state.name,
    lname: state.last,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chnageName: (name) => {
      dispatch({ type: "CHANGE_NAME", payload: name });
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(App);
