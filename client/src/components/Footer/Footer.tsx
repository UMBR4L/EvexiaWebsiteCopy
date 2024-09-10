import React from "react";
import LogoAndDescription from "./LogoAndDescription";
import UsefulLinks from "./UsefulLinks";
import NavigationLinks from "./NavigationLinks";
import ContactInfo from "./ContactInfo";
import SocialMediaLinks from "./SocialMediaLinks";
import LegalLinks from "./LegalLinks";
import dividerMobile from "../../assets/dividers/divider--mobile.png";
import footerBackground from "../../assets/art/footer-background.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white">
      <img src={footerBackground} alt="footer background art" className="mb-[-1px]"/>
      <div className="w-full bg-primaryColors-75 flex flex-col space-y-2xl md:grid md:grid-cols-6 lg:grid-cols-12 md:gap-gutter px-mobile-padding lg:px-desktop-padding py-xl mx-[-mobile-padding]">
      {/* Left Section: Logo and Description */}
      <div className="flex flex-col space-y-4xl">
        <div className="w-full lg:col-span-3">
          <LogoAndDescription />
        </div>

        <div className="w-full flex flex-col lg:col-span-6  md:space-x-14">
          {/* <UsefulLinks /> coming soon*/}
          {/* <NavigationLinks /> */}
          <ContactInfo />
        </div>

        <img src={dividerMobile} alt="divider line" className="w-full" />
      </div>

      <div className="flex flex-col space-y-2xl">
        <div className="w-full lg:col-span-6 flex flex-col space-y-base">
          <LegalLinks />
        </div>

        {/* <div className="w-full lg:col-span-6 flex justify-center lg:justify-end">
          <SocialMediaLinks />
        </div> */}

        <img src={dividerMobile} alt="divider line" className="w-full" />
      </div>


      <p className="text-center text-base font-semibold">
        Copyright © 2024 Evexia, Canada, Inc. All rights reserved.
      </p>
</div>
    </footer>
  );
};

export default Footer;
