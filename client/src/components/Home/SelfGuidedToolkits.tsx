import React from "react";
import SelfGuidedToolkitsScreen from "../../assets/screens/SelfGuidedToolkitsScreen.png";

const SelfGuidedToolkits: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-32">
      <div className="">
        <img
          src={SelfGuidedToolkitsScreen}
          alt="Self-Guided Toolkits Screen"
          className="w-[50%]"
        />
        <h2 className="text-3xl font-bold mb-4 text-primaryColors-100">
          Self-Guided Toolkits
        </h2>
        <p className="text-2xl text-neutralColors-100 font-body1 leading-roomy">
          Access a wealth of resource packages filled with practical tools and
          exercises. These packages are designed to empower you to take control
          of your mental health journey.
        </p>
      </div>
    </div>
  );
};

export default SelfGuidedToolkits;
