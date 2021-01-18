import HomePage from "./Layouts/Home";
import "./App.css";
import { connect } from "react-redux";
import { anotherName } from "./redux/actions/actions";

function App(props) {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
