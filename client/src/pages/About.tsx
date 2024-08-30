import React from "react";
import Hero from "../components/About/Hero";
import Team from "../components/About/Team";
import Quote from "../components/About/Quote";
import Footer from "../components/Footer/Footer";
import OurStory from "../components/About/OurStory";
import OurMission from "../components/About/OurMission";
import FounderMessage from "../components/About/FounderMessage";
import MeetOurTeam from "../components/About/MeetOurTeam";

const About = () => {
  return (
    <div className="flex flex-col font-inter z-0 absolute w-full mt-72 bg-dimPrimary">
      <OurStory />

      <OurMission />

      <FounderMessage />

      <MeetOurTeam />

      <Footer />
      {/* OLD ABOUT PAGE /*}
      {/* <div className="mt-[0px] md:mt-[0px] w-full">
        <Hero />
      </div>
      <div className="flex flex-col mx-5 md:mx-10 md:mt-0 bg-none justify-center items-center">
        <Quote />
      </div>
      <div className="flex flex-col mx-5 md:mx-10 md:mt-0 bg-none justify-center items-center">
        <Team />
      </div> */}
    </div>
  );
};

export default About;
