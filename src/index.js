import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import nameReducer from "./redux/reducers/nameReducer";
import lastReducers from "./redux/reducers/lastReducers";
import SearchMovieReducer from "./redux/reducers/searchMovieReducers";
import addNominationReducer from "./redux/reducers/addNominations";

const masterReducer = combineReducers({
  name: nameReducer,
  last: lastReducers,
  data: SearchMovieReducer,
  addNomination: addNominationReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  masterReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
