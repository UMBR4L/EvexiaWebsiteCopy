import React from "react";
import styles from "../../style";
import mountain from "../../assets/art/mountain.svg";
import flower from "../../assets/art/Flower.svg";
import appHomeScreen from "../../assets/screens/AppHomeScreen.png";
import appleStore from "../../assets/buttons/DownloadOnTheAppStore.png";
import googlePlay from "../../assets/buttons/GetItOnGooglePlay.png";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="px-14 pt-[125px] md:pt-[125px]">
        <div className="flex flex-col md:flex-row">
          <div className="text-left text-grey relative z-10 md:w-2/3 pr-32">
          
            <br />
            <br />
            <br />



            <div className="font-H1 text-5xl leading-huge font-semibold">
              Take care of all your{" "}
              <span className="text-mutedBlue">Mental Health</span> needs in one
              app
            </div>
            <br />

            {/* <div className="hidden ">
              <br />
            </div> */}

            <div className="text-base font-body1 md:text-2xl leading-spacious">
              Explore Evexia, where you begin a journey of self-care and
              support. Accessibility is everything, and we are here to enrich
              that.
            </div>

            {/* <div className="hidden">
              <br />
            </div> */}

            <br />
            
              <div className="flex flex-col space-y-10 md:space-x-10  md:space-y-0 md:flex-row  py-4">
                {/* Download buttons */}
                <div className="flex space-x-10">
                  <a href="https://apps.apple.com">
                    <img
                      src={appleStore}
                      alt="Download on the Apple Store"
                      className="w-full"
                    />
                  </a>
                  <a href="https://play.google.com">
                    <img
                      src={googlePlay}
                      alt="Get it on Google Play"
                      className="w-full"
                    />
                  </a>
                </div>
                {/* Old login and download buttons */}
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
            
          </div>
          <div className="md:w-1/3 flex justify-center md:mt-0 flex mt-10 ">
            <div className="max-w-full h-auto">
              <img
                src={appHomeScreen}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
