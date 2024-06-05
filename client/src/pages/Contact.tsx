import React from "react";
import Hero from "../components/Contact/Hero";
import CForm from "../components/Contact/CForm";

const Contact = () => {
  return (
    <div className="flex flex-col font-inter z-0 absolute w-full bg-gradient bg-gradient-to-b from-secondary to-tree">
      {" "}
      <div className="mt-[0px] md:mt-[0px] w-full">
        <Hero />
      </div>
      <div className="flex flex-col mx-5 md:mx-10 md:mt-0 bg-none justify-center items-center">
        <CForm />
      </div>
    </div>
  );
};

export default Contact;
