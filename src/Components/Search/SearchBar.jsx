import React, { useState } from "react";
import "./searchbox.css";

function SearchBar() {
  const [state, setState] = useState("");

  const onChange = (event) => {
    setState(event.target.value);
  };
  const submitForm = (event) => {
    const value = state;
    event.preventDefault();
    console.log(value);
  };

  return (
    <div className="searchbox-wrap">
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="searchbox"
          value={state}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
