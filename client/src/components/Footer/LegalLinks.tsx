import React from "react";
import elipseWhite from "../../assets/icons/ellipseWhite.png";

const LegalLinks: React.FC = () => {
  return (
    <div className="max-w-full flex  text-sm">
      <a href="/terms-conditions" className="font-regular text-lg text-white">
        Terms & Conditions
      </a>
      <img src={elipseWhite} alt="white elipse" className="w-auto h-[50%]" />
      <a href="/privacy-policy" className="font-regular text-lg text-white">
        Privacy Policy
      </a>
      <img src={elipseWhite} alt="white elipse" className="w-auto h-[50%]" />
      <a href="/partner-agreement" className="font-regular text-lg text-white">
        Partner Agreement
      </a>
    </div>
  );
};

export default LegalLinks;
