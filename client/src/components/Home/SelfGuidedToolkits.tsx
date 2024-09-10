import React from "react";
import SelfGuidedToolkitsScreen from "../../assets/screens/SelfGuidedToolkitsScreen.png";

const SelfGuidedToolkits: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-xl mb-10xl">
        <img
          src={SelfGuidedToolkitsScreen}
          alt="Self-Guided Toolkits Screen"
          className="w-auto"
        />
        <h2 className="text-3xl font-bold leading-roomy text-primaryColors-100">
          Self-Guided Toolkits
        </h2>
        <p className="text-xl text-neutralColors-100 leading-spacious">
          Access a wealth of resource packages filled with practical tools and
          exercises. These packages are designed to empower you to take control
          of your mental health journey.
        </p>
    </div>
  );
};

export default SelfGuidedToolkits;
