import React from "react";
import instagramLogo from "../../assets/logos/instagramLogo.png";
import facebookLogo from "../../assets/logos/facebookLogo.png";
import twitterLogo from "../../assets/logos/twitterLogo.png";

const ContactInfo: React.FC = () => {
  return (
    <div className="flex justify-between space-x-[50px]">
      <a href="https://instagram.com">
        <img src={instagramLogo} alt="instagram logo" />
      </a>
      <a href="https://facebook.com">
        <img src={facebookLogo} alt="facebook logo" />
      </a>
      <a href="https://x.com">
        <img src={twitterLogo} alt="twitter logo" />
      </a>
    </div>
  );
};

export default ContactInfo;
