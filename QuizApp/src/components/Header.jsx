import React from "react";
import HeaderImage from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={HeaderImage} alt="React Quiz Image" />
      <h1>React Quiz</h1>
    </header>
  );
}

export default Header;
