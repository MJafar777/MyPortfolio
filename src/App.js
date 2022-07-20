import React from "react";
import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Header from "./PortfolioContainer/Header/Header";
import Home from "./PortfolioContainer/Home/Home";


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
    </div>
  );
};

export default App;
