import React from "react";
import LogoAndDescription from "./LogoAndDescription";
import UsefulLinks from "./UsefulLinks";
import NavigationLinks from "./NavigationLinks";
import ContactInfo from "./ContactInfo";
import SocialMediaLinks from "./SocialMediaLinks";
import LegalLinks from "./LegalLinks";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center bg-primaryColors-75 text-white w-[100vw] py-20">
      <div className="w-[1305.32px]">
        <div className="container flex flex-row flex-wrap justify-between pb-[129px] border-b-[1px] border-white">
          <div className="container w-[608px]">
            <LogoAndDescription />
          </div>
          <div className="container max-w-[38.5%] flex flex-row space-x-14">
            <UsefulLinks />
            <NavigationLinks />
            <ContactInfo />
          </div>
        </div>
        <div className="container flex justify-between items-center py-10 border-b-[1px] border-white">
          <LegalLinks />
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
