import React from "react";
import styles from "../../style";
import mountain from "../../assets/art/mountain.svg";
import flower from "../../assets/art/Flower.svg";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="px-10 pt-5 text-left md:text-center bg-primary content-center rounded-b-[2%] xs:rounded-b-[10%] relative pb-[80px]  border-b-[10px] border-b-secondary">
        <div className="flex flex-col">
          <div className="flex flex-col text-secondary relative z-10">
            <div className="text-3xl sm:text-5xl font-semibold">
              Your mind is <span className={`${styles.merri}`}>your </span>mind
            </div>
            <br />

            <div className="hidden md:flex">
              <br />
            </div>

            <div className="text-base font-light md:text-lg">
              Connecting you to your organization's mental health resources and
              much more. <br /> Accesibility is everything, and we are here to
              enrich that.
            </div>
            <div className="hidden md:flex">
              <br />
            </div>

            <br />
            <div className="flex md:justify-center z-10">
              <div className="flex flex-col space-y-10 md:space-x-10 md:space-x-10 md:space-y-0 md:flex-row  py-4">
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
          <div className="absolute bottom-0 right-8 w-[40%] overflow-hidden ss:max-w-[25%] sm:max-w-[25%] md:w-[12%] xl:max-w-[9%] z-0 rounded-br-[24%] animate-grow">
            <img src={flower} className={`w-full h-full object`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
