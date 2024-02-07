import React from "react";
import Menu from "../Menu";
import ParticlesComp from "../Particles";
import Typewritter from "../Typewritter";
import "./Intro.css";
// import Typewritter from "../Typewritter";

function Intro() {
  return (
    <div className="intro__container">
      <ParticlesComp />
      <Typewritter />
      <Menu />
    </div>
  );
}

export default Intro;
