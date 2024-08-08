import React from "react";
import therapist1 from "../../assets/therapists/therapist1.png"; // Update these paths to your actual image paths
import therapist2 from "../../assets/therapists/therapist2.png";
import therapist3 from "../../assets/therapists/therapist3.png";
import therapist4 from "../../assets/therapists/therapist4.png";

const PersonalizedTherapySessions: React.FC = () => {
  return (
    <div className="flex flex-col w-[1200px] md:flex-row items-center mt-10 space-y-6 md:space-y-0">
      <div className="grid grid-cols-2 gap-4">
        <img src={therapist1} alt="Therapist 1" className="w-full"/>
        <img src={therapist2} alt="Therapist 2" className="w-[188.46px]"/>
        <img src={therapist3} alt="Therapist 3" className="w-[188.46px]"/>
        <img src={therapist4} alt="Therapist 4" className="w-[188.46px]"/>
      </div>
      <div className="ml-20 w-[650px]">
        <h2 className="text-4xl font-bold mb-4 text-primaryColors-100">
          Personalized Therapy Sessions
        </h2>
        <p className="text-2xl text-neutralColors-100 font-body1 leading-roomy">
          Experience tailored 1:1 therapy sessions with licensed professionals. Our therapists are dedicated to providing you with personalized support and guidance.
        </p>
      </div>
    </div>
  );
};

export default PersonalizedTherapySessions;
