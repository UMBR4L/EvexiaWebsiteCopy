import React from "react";
import { Link } from "react-router-dom";
import EvexiaLogoWhite from "../../assets/logos/EvexiaLogo__White.png"; // Adjust the path to your logo

const LogoDescription: React.FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="">
      <Link to="/" onClick={handleLogoClick}>
        <img
          src={EvexiaLogoWhite}
          alt="Evexia logo in white"
          className="max-w-full mb-6"
        />
      </Link>
      <p className="text-base font-semibold mb-3">What does Evexia mean?</p>
      <p className="text-lg font-medium">
        Translates to "wellness" in Greek, embodying our core philosophy.
      </p>
    </div>
  );
};

export default LogoDescription;
