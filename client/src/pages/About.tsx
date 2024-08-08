import React from "react";
import Hero from "../components/About/Hero";
import Team from "../components/About/Team";
import Quote from "../components/About/Quote";

const About = () => {
  return (
    <div className="flex flex-col font-inter z-0 absolute w-full bg-gradient bg-gradient-to-b from-secondary to-tree">
      {" "}
      <div className="mt-[0px] md:mt-[0px] w-full">
        <Hero />
      </div>
      <div className="flex flex-col mx-5 md:mx-10 md:mt-0 bg-none justify-center items-center">
        <Quote />
      </div>
      <div className="flex flex-col mx-5 md:mx-10 md:mt-0 bg-none justify-center items-center">
        <Team />
      </div>
    </div>
  );
};

export default About;
