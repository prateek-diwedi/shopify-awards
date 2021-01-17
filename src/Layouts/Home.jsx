import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/Search/SearchBar";
import LandingPage from "../Components/LandingPage/LandingPage";

function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <LandingPage />
    </div>
  );
}

export default Home;
