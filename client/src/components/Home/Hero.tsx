import React from "react";
// import styles from "../../style";
// import mountain from "../../assets/art/mountain.svg";
// import flower from "../../assets/art/Flower.svg";
import appHomeScreen from "../../assets/screens/AppHomeScreen.png";
import appleStore from "../../assets/buttons/DownloadOnTheAppStore.png";
import googlePlay from "../../assets/buttons/GetItOnGooglePlay.png";

import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="w-full mt-2xl mb-20xl">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center space-y-xl">
        {/* Header */}
        <h1 className="text-grey text-3xl leading-roomy font-semiBold">
          Take care of all your{" "}
          <span className="text-mutedBlue">Mental Health</span> needs in one app
        </h1>

        {/* Image Section */}
        <div className="image-section flex justify-center md:justify-end">
          <img
            src={appHomeScreen}
            alt="App Home Screen"
            className="w-auto object-contain"
          />
        </div>

        {/* Description */}
        <div className="font-medium text-xl px-lg md:text-2xl leading-comfy">
          Explore Evexia, where you begin a journey of self-care and support.
          Accessibility is everything, and we are here to enrich that.
        </div>

        {/* Download buttons */}
        <div className="flex flex-col justify-center space-y-xl">
          <a href="https://apps.apple.com">
            <img
              src={appleStore}
              alt="Download on the Apple Store Soon"
              className="w-auto"
            />
          </a>
          <a href="https://play.google.com">
            <img
              src={googlePlay}
              alt="Get it on Google Play Soon"
              className="w-auto"
            />
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-12 gap-gutter items-center">
        {/* Left Side: Text Section */}
        <div className="col-span-6 flex flex-col justify-start mr-8">
          <h1 className="text-4xl lg:text-5xl font-semibold lg:font-bold text-grey leading-roomy lg:leading-huge mb-6">
            Take care of all your{" "}
            <span className="text-mutedBlue">Mental Health</span> needs in one
            app
          </h1>

          <p className="text-lg lg:text-xl text-grey leading-relaxed mb-10">
            Explore Evexia, where you begin a journey of self-care and support.
            Accessibility is everything, and we are here to enrich that.
          </p>

          {/* Download buttons */}
          <div className="flex space-x-8">
            <a href="https://apps.apple.com">
              <img
                src={appleStore}
                alt="Download on the Apple Store"
                className="w-auto"
              />
            </a>
            <a href="https://play.google.com">
              <img
                src={googlePlay}
                alt="Get it on Google Play"
                className="w-auto"
              />
            </a>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="col-span-6 flex justify-end">
          <img
            src={appHomeScreen}
            alt="App Home Screen"
            className="max-w-full object-contain"
          />
        </div>
      </div>

      {/* OLD CODE */}
      {/* <div className={`${styles.pop_sm} flex`}>
                  <Link
                    to="/app/login"
                    className={`bg-lightOrange text-white px-10 py-3 rounded-xl drop-shadow-sm border-2 border-navBarSecondary text-sm sm:text-lg font-medium mb-0`}
                  >
                    Check out Resources
                  </Link>
                </div>

                <div className={`${styles.pop_sm} flex font-medium mb-0`}>
                  <Link
                    to="/app/login"
                    className={`bg-tree text-white px-[54px] py-3 rounded-xl drop-shadow-sm border-2 border-navBarSecondary text-sm sm:text-lg`}
                  >
                    Download Button
                  </Link>
                </div> */}

      {/* <div className={`${styles.pop_sm} flex font-medium mb-0`}>
                  <Link
                    to="/app/login"
                    className={`bg-malibu text-white px-10 py-3 rounded-xl drop-shadow-sm border-2 border-navBarSecondary`}
                  >
                    Contact Button
                  </Link>
                </div> */}
    </div>
  );
};

export default Hero;
