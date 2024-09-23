// src/components/Home/FAQ.tsx
import React from "react";
import arrowRight from "../../assets/icons/arrowRight.png";

const FAQ: React.FC = () => {
  const faqs = [
    "Who can use Evexia?",
    "How do I know if therapy is right for me?",
    "How long does each therapy session last?",
    "How often should I attend therapy?",
    "Are therapy sessions virtual or in-person?",
    "How do I create an account?"
  ];

  return (
    <div className="w-full flex flex-col mb-10xl">
      <h2 className="text-xl text-center font-semiBold text-primaryColors-100 mb-2">FAQ</h2>
      <h3 className="text-3xl text-center font-bold leading-roomy mb-3xl text-primaryColors-100">Frequently Asked Questions</h3>
      <ul className="">
        {faqs.map((faq, index) => (
          <li key={index} className="max-w-full border-b border-[#a6a6a6] py-5">
            <a href="#" className="flex justify-between items-center text-2xl font-semiBold text-neutralColors-100 flex-grow text-left">
              {faq}
            <img src={arrowRight} alt="arrow pointing right" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
