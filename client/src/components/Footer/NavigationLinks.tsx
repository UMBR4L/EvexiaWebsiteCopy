import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks: React.FC = () => {
  return (
    <div className="w-[116.4px] space-y-6">
      <h3 className="font-semiBold text-lg">Navigation</h3>
      <ul className="space-y-6">
        <li>
          <Link to="/about" className="text-lg font-regular">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg font-regular">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="text-lg font-regular">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
