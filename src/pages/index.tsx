import Intro from "@/app/components/Intro";
import ParticlesComp from "@/app/components/Particles";
import WhitePage from "@/app/components/WhitePage";
import React from "react";
import "./main.css";

function index() {
  return (
    // <div>Hi, I am Debashis Debnath, a frontend developer who is constantly looking for new & interesting problems to solve</div>
    <>
      <Intro />
      <WhitePage />
    </>
  );
}

export default index;
