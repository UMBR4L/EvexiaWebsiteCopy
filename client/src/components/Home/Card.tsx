import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-primary px-6 py-12 rounded-lg h-auto">
      <img src={icon} alt={title} className="w-[117.17px] h-[117.17px] mb-4" />
      <h3 className="text-xl font-montserratBold leading-snug mt-6 mb-2">{title}</h3>
      <p className="font-body1 text-base leading-comfy text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
