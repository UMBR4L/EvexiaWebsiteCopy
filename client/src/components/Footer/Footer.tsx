import React from "react";
import LogoAndDescription from "./LogoAndDescription";
import UsefulLinks from "./UsefulLinks";
import NavigationLinks from "./NavigationLinks";
import ContactInfo from "./ContactInfo";
import SocialMediaLinks from "./SocialMediaLinks";
import LegalLinks from "./LegalLinks";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryColors-75 text-white w-full py-20">
      {/* Main Footer Content */}
      <div className="max-w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-gutter mx-mobile-margin lg:mx-desktop-margin pb-10">
        {" "}

          <div className="col-span-4 lg:col-span-3">
            {/* Left Section: Logo and Description */}
            <LogoAndDescription />
          </div>
          <div className="col-span-4 lg:col-span-6 flex flex-col md:space-x-14">
            <UsefulLinks />
            <NavigationLinks />
            <ContactInfo />
          </div>

        <div className="col-span-4 lg:col-span-6 flex flex-col justify-between items-center py-10 border-b-[1px] border-white">
          <LegalLinks />
        </div>
        <div className="col-span-4 lg:col-span-6 flex justify-center lg:justify-end">
          <SocialMediaLinks />
        </div>
        <p className="text-center text-base font-semibold pt-8">
          Copyright © 2024 Evexia, Canada, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
