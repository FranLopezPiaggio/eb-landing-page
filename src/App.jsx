import React from "react";
import "./style.css";
import Logo from "./components/Logo";
import Header from "./components/Header";
import TitleText from "./components/TitleText";
import Description from "./components/Description";
import background from "./assets/background-white.svg"

function App() {
  return (
    <div className="general-container">
      <img src={background}></img>
      <div className="card-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="text-container">
          <Header />
          <TitleText />
          <Description />
        </div>
      </div>
    </div>
  );
}

export default App;
