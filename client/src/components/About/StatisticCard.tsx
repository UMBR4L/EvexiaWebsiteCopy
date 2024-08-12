import React from "react";

interface StatisticCardProps {
  percentage: string;
  description: string;
  bgColor: string;
  roundedCorners?: {
    topLeft?: boolean;
    topRight?: boolean;
    bottomLeft?: boolean;
    bottomRight?: boolean;
  };
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  percentage,
  description,
  bgColor,
  roundedCorners = {
    topLeft: true,
    topRight: true,
    bottomLeft: false,
    bottomRight: true,
  }, // Default values
}) => {
  const roundedClasses = `
    ${roundedCorners.topLeft ? "rounded-tl-[40px]" : ""}
    ${roundedCorners.topRight ? "rounded-tr-[40px]" : ""}
    ${roundedCorners.bottomLeft ? "rounded-bl-[40px]" : ""}
    ${roundedCorners.bottomRight ? "rounded-br-[40px]" : ""}
  `;
  return (
    <div className={`p-[30px] ${roundedClasses} ${bgColor} flex flex-col justify-between`}>
      <div className="flex-1">
        <h3 className="text-3xl font-semiBold mb-[7px]">{percentage}</h3>
        <p className="text-xl font-regular leading-comfy">{description}</p>
      </div>
    </div>
  );
};

export default StatisticCard;