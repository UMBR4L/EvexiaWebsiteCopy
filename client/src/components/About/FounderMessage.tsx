import React from "react";
import founderImage from "../../assets/members/navyaGoel--2.png"; // Adjust the path as needed

const FounderMessage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-x-8 bg-primary py-5 px-[136px] pb-72">
      <div className="md:w-3/5 px-5 py-10">
        <h2 className="text-4xl font-bold text-primaryColors-100 mb-6">
          A Message From The Founder
        </h2>
        <p className="text-2xl font-regular text-neutralColors-100 leading-roomy">
          As an immigrant in Canada, navigating my own mental health journey
          highlighted the stark reality: limited resources and sky-high costs.
          It became clear that mental well-being shouldn't be a luxury but a
          fundamental right for all.
        </p>
        <br />
        <p className="text-2xl font-regular text-neutralColors-100 leading-roomy">
          This realization led to the birth of Evexia—a vision to break down
          barriers and make mental health resources accessible and affordable
          for everyone, everywhere.
        </p>
      </div>

      <div className="bg-shadesColors-0 flex flex-col items-center text-center md:text-left md:ml-8 p-5">
        <img
          src={founderImage}
          alt="Founder Navya Goel"
          className="w-[400px] h-[400px] rounded-xl mb-5"
        />
        <h3 className="text-3xl font-semiBold text-primaryColors-100 mb-4">Navya Goel</h3>
        <p className="text-2xl font-medium text-primaryColors-100">
          CEO • Founder
        </p>
      </div>
    </div>
  );
};

export default FounderMessage;
