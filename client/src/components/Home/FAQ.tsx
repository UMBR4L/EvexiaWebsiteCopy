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
    <div className="w-full mb-32">
      <h2 className="text-2xl text-center font-semiBold text-primaryColors-100 mb-2">FAQ</h2>
      <h3 className="text-4xl text-center font-bold mb-24 text-primaryColors-100">Frequently Asked Questions</h3>
      <ul className="space-y-6">
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
