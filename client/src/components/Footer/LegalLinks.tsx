import React from "react";
import elipseWhite from "../../assets/icons/ellipseWhite.png";

const LegalLinks: React.FC = () => {
  return (
    <div className="w-[764.44px] flex space-x-[62px] text-sm">
      <a href="/terms-conditions" className="font-regular text-lg text-white">
        Terms & Conditions
      </a>
      <img src={elipseWhite} alt="white elipse" className="w-[17px] h-[17px]" />
      <a href="/privacy-policy" className="font-regular text-lg text-white">
        Privacy Policy
      </a>
      <img src={elipseWhite} alt="white elipse" className="w-[17px] h-[17px]" />
      <a href="/partner-agreement" className="font-regular text-lg text-white">
        Partner Agreement
      </a>
    </div>
  );
};

export default LegalLinks;
