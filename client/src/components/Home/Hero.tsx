import React from "react";
import styles from "../../style";
import mountain from "../../assets/art/mountain.svg";
import flower from "../../assets/art/Flower.svg";
import appHomeScreen from "../../assets/screens/AppHomeScreen.png";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="px-10 text-left md:text-center pt-[125px] md:pt-[75px] content-center">

        <div className="flex flex-col md:flex-row md:items-center">

          <div className="text-justify text-grey relative z-10 md:w-1/2">

            <div className="font-H1 text-3xl sm:text-5xl font-semibold">
              Take care of all your Mental Health needs in one app
            </div>
            <br />

            <div className="hidden md:flex">
              <br />
            </div>

            <div className="text-base font-body1 font-medium md:text-lg">
              Explore Evexia, where you begin a journey of self-care and
              support. Accessibility is everything, and we are here to enrich
              that.
            </div>
            <div className="hidden md:flex">
              <br />
            </div>

            <br />
            <div className="flex sm:justify-center z-10">
              <div className="flex flex-col space-y-10 md:space-x-10  md:space-y-0 md:flex-row  py-4">
                <div className={`${styles.pop_sm} flex`}>
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
                </div>

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
          </div>
          <div className="md:w-1/2 flex mt-10 md:mt-0 ml-20">
            <div className="w-[60%] md:w-[80%] lg:w-[60%] xl:w-[50%]">
              {/* <div className="flex w-[40%] overflow-hidden ss:max-w-[25%] sm:max-w-[25%] md:w-[12%] xl:max-w-[9%] z-0 rounded-br-[24%] animate-grow"> */}
              <img src={appHomeScreen} className={`w-full h-full object`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
