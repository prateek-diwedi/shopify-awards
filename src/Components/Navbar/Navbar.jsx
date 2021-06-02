import React from "react";
import "./navbar.css";
import NominationPage from "../../Components/Nominations/Nominations";

function Navbar() {
  return (
    <div className="navbar_wrap">
      <h3> The Shoppies 2.0 </h3>
      <NominationPage buttonName="Nominations" />
    </div>
  );
}

export default Navbar;
