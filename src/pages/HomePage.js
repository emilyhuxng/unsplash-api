import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Images from "../components/Images";

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Filter />
      <Images />
    </div>
  );
};

export default HomePage;
