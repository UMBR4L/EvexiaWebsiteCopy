import React from "react";
import ComingSoonOnTheAppStore from "../../assets/buttons/ComingSoonOnTheAppStore.png";
import AndroidAppOnGooglePlay from "../../assets/buttons/AndroidAppOnGooglePlay.png";

const AnytimeAnywhere: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[541px] mb-56">
      <h2 className="text-5xl font-bold text-center leading-huge text-[#000000] mb-14">
        Anytime,
        <br />
        Anywhere
      </h2>

      <div className="flex space-x-8">
        <a href="https://apps.apple.com">
          <img
            src={ComingSoonOnTheAppStore}
            alt="Coming Soon on the App Store button"
          />
        </a>{" "}
        <a href="https://play.google.com">
          <img
            src={AndroidAppOnGooglePlay}
            alt="Android App on Google Play button"
          />
        </a>
      </div>
    </div>
  );
};

export default AnytimeAnywhere;
