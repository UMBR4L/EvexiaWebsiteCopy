import React from "react";
import ComprehensiveProgramsScreen from "../../assets/screens/ComprehensiveProgramsScreen.png";

const ComprehensivePrograms: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-xl mb-10xl">
      <img
        src={ComprehensiveProgramsScreen}
        alt="Comprehensive Programs Screen"
        className="w-auto"
      />
        <h2 className="text-3xl font-bold leading-roomy text-primaryColors-100">
          Comprehensive Programs
        </h2>
        <p className="text-xl text-neutralColors-100 font-body1 leading-spacious">
          Engage in structured programs designed to address various mental
          health challenges. Each program is crafted to help you develop
          effective coping strategies and achieve your wellness goals.
        </p>
    </div>
  );
};

export default ComprehensivePrograms;
