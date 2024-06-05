import React, { useState, useRef, FormEvent } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import styles from "../../style";

// const formRef = useRef<HTMLFormElement>(null);

interface IAudience {
  targetAudience: string;
  reasons: string;
  description: string;
}

interface IAudiences {
  [key: string]: IAudience;
}

const audiences: IAudiences = {
  1: {
    targetAudience: "For Individuals and Employees",
    reasons: "Got questions? Need support?",
    description:
      "If you're an user or an individual interested in learning more about how Evexia can support you, don't hesitate to drop us a line. Every question is a step closer to better well-being.",
  },
  2: {
    targetAudience: "For Organization Representatives",
    reasons: "Let's Collaborate for Better Mental Health",
    description:
      "If you represent an organization and are interested in partnering with us to offer top-tier mental health resources to your team or students, we’re here to start the conversation. Fill out the contact form or reach out directly to discuss how we can tailor our services to meet your needs.",
  },
  3: {
    targetAudience: "For Voting to Influence Your Organization",
    reasons: "Make Your Voice Heard—Vote for Change!",
    description:
      "Are you an employee or student who believes your organization could benefit from our services? Let us know by submitting a 'vote.' Your voice is powerful—collect enough votes, and we’ll present a compelling case to your organization, showing the genuine demand for Evexia's resources among your peers. Simply select the 'Vote for Evexia' option when you send your message. Together, we can make a meaningful impact. ** Please include the name of your organization in your message.",
  },
};

interface IPopUpProps {
  targetAudience: string;
  reasons: string;
  description: string;
}

const PopUp: React.FC<IPopUpProps> = ({
  targetAudience,
  reasons,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition mt-14 ml-4 sm:ml-10">
      <div
        className="accordion-header cursor-pointer flex space-x-5 px-5 items-center h-2"
        onClick={togglePopUp}
      >
        {isOpen ? (
          <FaMinus className="text-secondary" />
        ) : (
          <FaPlus className="text-secondary" />
        )}
        <h2 className="text-gr font-semibold text-lg md:text-2xl">
          {targetAudience}
        </h2>
      </div>
      <div
        className={`accordion-content px-5 pt-0 overflow-hidden transition-max-height duration-300 ease-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } space-y-4 mr-4 text-sm`}
      >
        <div className="flex flex-row ml-8 py-4 mt-2 xs:mt-0">
          <div className="flex w-1 bg-lightOrange"></div>
          <div className="flex-1 p-3">
            <p className="pl-2 sm:pl-4 text-left text-xl mb-2 text-secondary">
              {reasons}
            </p>
            <p className="pl-2 sm:pl-4 text-left text-base text-gr">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailState, setMailState] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      if (email === "" || name === "" || message === "") {
        setMailState("Please fill out all the fields!");
        return;
      }

      emailjs
        .sendForm("service_c2g33ge", "template_ivxjnvk", formRef.current, {
          publicKey: "Hu5XK8P_U8WzTb-S1",
        })
        .then(
          (result) => {
            console.log("SUCCESS!");
            setMailState("Your message has been sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
            formRef.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            setMailState(
              "An error occurred while sending your message. Please try again."
            );
          }
        );
    }
  };

  return (
    <div className="w-[100%] flex flex-col lg:max-w-[1500px] bg- my-5 rounded-[20px] md:mr-3 md:space-x- bg-primary">
      <div className=" mx-10 text-secondary mt-5 ">
        <span className="text-3xl lg:text-3xl font-bold tracking-wider px-4 md:px-10">
          Why reach out?
        </span>
      </div>
      <div className="flex flex-wrap xs:mx-7 mb-9 rounded-lg border-dimPrimary border-4 py-5 xs:py-5 space-y-5">
        {Object.keys(audiences).map((k) => (
          <div className="bg- rounded-3xl w-full">
            <PopUp
              key={k}
              targetAudience={audiences[k].targetAudience}
              reasons={audiences[k].reasons}
              description={audiences[k].description}
            />
          </div>
        ))}
      </div>

      <div className=" mx-10 text-secondary mt-5 ">
        <span className="text-3xl lg:text-3xl font-bold tracking-wider px-4 md:px-10">
          Contact Form
        </span>
      </div>

      <div className=" mt-4 flex flex-col lg:max-w-4xl mb-5 rounded-2xl px-10 pb-10 mx-auto">
        <form className="space-y-6" ref={formRef} onSubmit={sendEmail}>
          <label className="flex text-red-500  mb-4" htmlFor="from_name">
            {mailState === "Your message has been sent successfully!" ? (
              <span className="text-tree"> {mailState}</span>
            ) : (
              <p>{mailState}</p>
            )}
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-4 border rounded-md"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            placeholder="Your Email"
            className="w-full p-4 border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-4 h-40 border rounded-md"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="space-y-2">
            <div className="p-2 rounded hover:bg-[#eae5de]">
              <input
                type="radio"
                id="general_info"
                name="contact_reason"
                value="General Information OR Support"
                className={`${styles.radio} cursor-pointer`}
              />
              <label htmlFor="general_info" className="cursor-pointer">
                I am reaching out for general information or support.
              </label>
            </div>
            <div className="p-2 rounded hover:bg-[#eae5de]">
              <input
                type="radio"
                id="representative"
                name="contact_reason"
                value="Interested to Join Evexia"
                className={`${styles.radio} cursor-pointer`}
              />
              <label htmlFor="representative" className="cursor-pointer">
                I am an organization representative interested in services.
              </label>
            </div>
            <div className="p-2 rounded hover:bg-[#eae5de]">
              <input
                type="radio"
                id="vote_for_evexia"
                name="contact_reason"
                value="Vote for Evexia"
                className={`${styles.radio} cursor-pointer`}
              />
              <label htmlFor="vote_for_evexia" className="cursor-pointer">
                Vote for Evexia to reach my organization.
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white p-4 rounded-md transition duration-300 hover:bg-secondary-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CForm;
