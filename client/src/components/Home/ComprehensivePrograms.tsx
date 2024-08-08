import React from "react";
import ComprehensiveProgramsScreen from "../../assets/screens/ComprehensiveProgramsScreen.png";

const ComprehensivePrograms: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-16">
      <div className="mr-20 ">
        <h2 className="text-4xl font-bold mb-4 text-primaryColors-100">
          Comprehensive Programs
        </h2>
        <p className="text-2xl text-neutralColors-100 font-body1 leading-roomy">
          Engage in structured programs designed to address various mental
          health challenges. Each program is crafted to help you develop
          effective coping strategies and achieve your wellness goals.
        </p>
      </div>
      <img
        src={ComprehensiveProgramsScreen}
        alt="Comprehensive Programs Screen"
        className="w-[342px]"
      />
    </div>
  );
};

export default ComprehensivePrograms;
