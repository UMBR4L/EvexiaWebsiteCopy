import React from "react";
import ComprehensiveProgramsScreen from "../../assets/screens/ComprehensiveProgramsScreen.png";

const ComprehensivePrograms: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center mb-16">
        <h2 className="w-full text-3xl font-bold mb-4 text-primaryColors-100">
          Comprehensive Programs
        </h2>
        <p className="text-2xl text-neutralColors-100 font-body1 leading-roomy">
          Engage in structured programs designed to address various mental
          health challenges. Each program is crafted to help you develop
          effective coping strategies and achieve your wellness goals.
        </p>
      <img
        src={ComprehensiveProgramsScreen}
        alt="Comprehensive Programs Screen"
        className="w-[50%]"
      />
    </div>
  );
};

export default ComprehensivePrograms;
