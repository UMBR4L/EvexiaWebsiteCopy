import React from "react";
import StatisticCard from "./StatisticCard";

import statImage1 from "../../assets/photos/personHoldingSmartphoneAtDesk.png";
import statImage2 from "../../assets/photos/manLookingOutWindow.png";

const OurStory: React.FC = () => {
  return (
    <section className="text-neutralColors-100 font-inter flex flex-col md:flex-row justify-between items-center mb-72 mx-24">
      <div className="w-[577px] pr-[53px]">
        <h2 className="text-5xl font-bold mb-6">Our Story</h2>
        <p className="text-2xl font-regular leading-roomy mb-4">
          Evexia was born out of a deep-rooted passion for mental health
          advocacy. We believe that mental well-being is a fundamental right,
          not a privilege.
        </p>
        <p className="text-2xl font-regular leading-roomy mb-8">
          Our commitment is to ensure that students in Canada have access to the
          support they need to thrive mentally and emotionally.
        </p>
        <div className="text-xl text-center w-[321px] border-[1px] border-primaryColors-50 p-5 rounded-lg">
          <p className="font-medium leading-loose ">Did you know? </p>
          <p>
            Evexia is Greek for
            <span className="font-bold italic text-warningColors-100">
              {" "}
              wellness!
            </span>
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatisticCard
          percentage="70%"
          description="of students in Canada find mental health resources to be inaccessible"
          bgColor="bg-tumbleweed"
          roundedCorners={{
            topLeft: true,
            topRight: true,
            bottomLeft: false,
            bottomRight: true,
          }}
        />
        <img src={statImage1} />
        <img src={statImage2} />
        <StatisticCard
          percentage="80%"
          description="of people use their mobile phones to look online for emotional concerns."
          bgColor="bg-primaryColors-25"
          roundedCorners={{
            topLeft: true,
            topRight: true,
            bottomLeft: true,
            bottomRight: false,
          }}
        />
      </div>
    </section>
  );
};

export default OurStory;
