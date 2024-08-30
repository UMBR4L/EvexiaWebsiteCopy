import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between space-x-20 mx-32 mb-48">
      {/* Left Section */}
      <div className="flex flex-col space-y-6 w-[35%]">
        <p className="text-md font-bold text-lg text-primaryColors-100 ">
          Get in touch with us.
        </p>
        <h2 className="text-5xl font-bold text-neutralColors-100 leading-huge">
          We would love to hear from you
        </h2>
        <p className="text-lg text-neutralColors-100 leading-loose">
          Available for questions... <br />
          <span className="font-bold">inquiry@evexia.com</span>{" "}
        </p>
      </div>
      {/* Right Section */}
      <form className="flex flex-col mt-14 w-[60%] text-xl font-medium leading-loose text-black">
        <p className="block">
          Name <span className="font-regular text-base">(required)</span>
        </p>
        <div className="space-y-4">
        <div className="flex space-x-4 ">
          <div className="w-1/2">
            <label htmlFor="firstName" className="block font-medium">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="w-full p-3 border rounded-lg border-neutralColors-25 shadow-lg "
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName" className="block font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              className="w-full p-3 border rounded-lg border-neutralColors-25 shadow-lg"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Email <span className="font-regular text-base">(required)</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full p-3 border rounded-lg border-neutralColors-25 shadow-lg"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block font-medium">
            Phone Number{" "}
            <span className="font-regular text-base">(optional)</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="w-full p-3 border rounded-lg border-neutralColors-25 shadow-lg"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-medium">
            Subject <span className="font-regular text-base">(required)</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="w-full p-3 border rounded-lg border-neutralColors-25 shadow-lg"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block font-medium">
            Message <span className="font-regular text-base">(required)</span>
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="w-full p-3 border rounded-lg border-neutralColors-25 shadow-lg h-32"
          />
        </div>
        <button
          type="submit"
          className="bg-primaryColors-75 text-white p-3 rounded text-lg font-bold"
        >
          Submit
        </button>
        </div>
      </form>{" "}
    </div>
  );
};

export default ContactForm;
