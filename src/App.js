import HomePage from "./Layouts/Home";
import "./App.css";
import { connect } from "react-redux";
import { anotherName } from "./redux/actions/actions";

function App(props) {
  return (
    <div className="App">
      <HomePage />
      {/* <button
        onClick={() => {
          props.chnageName({ name: "users" });
        }}
      >
        CHnage Name
      </button>

      <h1> {props.fname.name}</h1>
      <h1> {props.lname.last}</h1> */}
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
      dispatch(anotherName(name));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(App);
