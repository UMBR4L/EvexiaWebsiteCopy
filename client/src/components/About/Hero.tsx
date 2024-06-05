import React from "react";
import styles from "../../style";
import mountain from "../../assets/art/mountain.svg";
import question from "../../assets/art/question.svg";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="px-10  text-left md:text-center pt-[125px] md:pt-[200px] bg-primary content-center rounded-b-[2%] xs:rounded-b-[10%] relative pb-[80px]  border-b-[10px] border-b-secondary">
        <div className="flex flex-col">
          <div className="flex flex-col text-secondary relative z-10">
            <div className="text-3xl sm:text-5xl font-semibold">
              Who we <span className={`${styles.merri}`}>are</span> • What we
              <span className={`${styles.merri}`}> do</span>
            </div>
            <br />

            <div className="hidden md:flex">
              <br />
            </div>

            <div className="text-base flex font-light md:text-lg text-left justify-center">
              We develop research and evidence based toolkits & resources to
              help tackle even the most trivial of roadblocks at work, school
              and home. <br /> Working with your organsation to make their
              resources and our's available to you in the most optimal way.
            </div>
            <div className="hidden md:flex">
              <br />
            </div>

            <br />
            <div className="flex sm:justify-center z-10">
              <div className="flex flex-col space-y-10 md:space-x-10  md:space-y-0 md:flex-row  py-4">
                <div className={` flex`}>
                  <div
                    className={`bg-transparent backdrop-blur-lg text-secondary px-10 py-3 rounded-xl drop-shadow-sm border-2 border-navBarSecondary text-sm sm:text-lg font-medium mb-0`}
                  >
                    Did you know?
                    <br /> Evexia is Greek for{" "}
                    <span className={`${styles.merri} animate-grow`}>
                      wellness
                    </span>
                    .
                  </div>
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
          <div className="absolute bottom-0 right-8 w-[40%] overflow-hidden ss:max-w-[25%] sm:max-w-[25%] md:w-[12%] xl:max-w-[9%] z-0 rounded-br-[24%] animate-slide-left">
            <img src={question} className={`w-full h-full object`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
