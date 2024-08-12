import React from "react";
import laptopAndBookOnTable from "../../assets/photos/laptopAndBookOnTable.png"; // Adjust paths as needed
import womanTalkingToLaptop from "../../assets/photos/womanTalkingToLaptop.png";

const OurMission: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:space-x-20 mx-32 mb-72 ">
      <div className="w-1/2 flex flex-col relative">
        <img
          src={laptopAndBookOnTable}
          alt="Person working on laptop"
          className="rounded-3xl w-[55%] z-10"
        />
        <img
          src={womanTalkingToLaptop}
          alt="Person reading a book"
          className="rounded-3xl w-[55%] mt-[-100px] ml-[260px] z-0"
        />
      </div>

      <div className="w-1/2">
        <h2 className="text-5xl font-bold text-primaryColors-100 mb-6">
          Our Mission
        </h2>
        <p className="text-2xl font-regular text-neutralColors-100 leading-roomy">
          At Evexia, our mission is to make mental health support accessible
          and affordable for all. We develop research and evidence-based
          toolkits & resources to help tackle even the most trivial of
          roadblocks at work, school, and home.
        </p>
        <br />
        <p className="text-2xl font-regular text-neutralColors-100 leading-roomy">
          We are dedicated to breaking down barriers and working with your
          organization to make their resources and ours available to you in the
          most optimal way.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
