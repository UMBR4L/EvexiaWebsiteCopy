import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full flex flex-col items-center text-center bg-primary px-6 py-12 rounded-lg">
      <img src={icon} alt={title} className="w-full" />
      <h3 className="text-xl font-montserratBold leading-snug mt-10 mb-2">{title}</h3>
      <p className="font-body1 text-base leading-comfy text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
