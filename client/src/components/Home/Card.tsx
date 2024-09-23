import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full max-w-xs flex flex-col items-center text-center bg-primary px-base py-2xl space-x-base rounded-lg">
      <img src={icon} alt={title} className="w-[50%] mx-10xl" />
      <h3 className="text-lg font-montserratBold font-bold leading-snug mt-10 mb-2">{title}</h3>
      <p className="font-regular text-sm leading-loose text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
