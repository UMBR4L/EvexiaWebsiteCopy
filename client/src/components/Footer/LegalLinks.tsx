import React from "react";
import elipseWhite from "../../assets/icons/ellipseWhite.png";

const LegalLinks: React.FC = () => {
  return (
    <div className="w-full flex items-center text-sm">
      <a href="/terms-conditions" className="font-regular text-sm text-white">
        Terms & Conditions
      </a>
      <img src={elipseWhite} alt="white elipse" className="w-auto h-[25%]" />
      <a href="/privacy-policy" className="font-regular text-sm text-white">
        Privacy Policy
      </a>
      <img src={elipseWhite} alt="white elipse" className="w-auto h-[25%]" />
      <a href="/partner-agreement" className="font-regular text-sm text-white">
        Partner Agreement
      </a>
    </div>
  );
};

export default LegalLinks;
