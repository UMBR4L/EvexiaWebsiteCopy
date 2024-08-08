import React from "react";
import SelfGuidedToolkitsScreen from "../../assets/screens/SelfGuidedToolkitsScreen.png";

const SelfGuidedToolkits: React.FC = () => {
  return (
    <div className="flex items-center mb-32">
      <img src={SelfGuidedToolkitsScreen} alt="Self-Guided Toolkits Screen" />
      <div className="ml-20 mr-[180px]">
        <h2 className="text-4xl font-bold mb-4 text-primaryColors-100">
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
