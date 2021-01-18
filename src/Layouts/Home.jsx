import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/Search/SearchBar";
import LandingPage from "../Components/LandingPage/LandingPage";
import NominationPage from "../Components/Nominations/Nominations";

function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <LandingPage />
      <NominationPage />
    </div>
  );
}

export default Home;
