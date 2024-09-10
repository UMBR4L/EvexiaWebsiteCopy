import React from "react";
import therapist1 from "../../assets/therapists/therapist1.png"; // Update these paths to your actual image paths
import therapist2 from "../../assets/therapists/therapist2.png";
import therapist3 from "../../assets/therapists/therapist3.png";
import therapist4 from "../../assets/therapists/therapist4.png";

const PersonalizedTherapySessions: React.FC = () => {
  return (
    <div className="w-full flex flex-col mb-16 items-center">
      <div className="w-full grid grid-cols-2 gap-6">
        <img src={therapist1} alt="Therapist 1" className="w-[75%]"/>
        <img src={therapist2} alt="Therapist 2" className="w-[75%]"/>
        <img src={therapist3} alt="Therapist 3" className="w-[75%]"/>
        <img src={therapist4} alt="Therapist 4" className="w-[75%]"/>
      </div>
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4 text-primaryColors-100">
          Personalized Therapy Sessions
        </h2>
        <p className="text-2xl text-neutralColors-100 leading-roomy">
          Experience tailored 1:1 therapy sessions with licensed professionals.
          Our therapists are dedicated to providing you with personalized
          support and guidance.
        </p>
      </div>
    </div>
  );
};

export default PersonalizedTherapySessions;
