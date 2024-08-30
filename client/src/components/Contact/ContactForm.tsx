import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        to: "outreachevexia@gmail.com",
        subject: formData.subject,
        text: `
          Name: ${formData.firstName} ${formData.lastName}
          Email: ${formData.email}
          Phone: ${formData.phoneNumber}
          Message: ${formData.message}
        `,
      });

      if (response.status === 200) {
        setStatusMessage("Your message has been sent successfully.");
      } else {
        setStatusMessage(
          "There was an issue sending your message. Please try again later."
        );
      }
    } catch (error) {
      setStatusMessage(
        "An error occurred while sending your message. Please try again later."
      );
    }
  };

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
      <form
        className="flex flex-col mt-14 w-[60%] text-xl font-medium leading-loose text-black"
        onSubmit={handleSubmit}
      >
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
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.lastName}
                onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phoneNumber}
              onChange={handleChange}
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
              value={formData.subject}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-neutralColors-25 shadow-lg h-32"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-mutedBlue text-white p-3 rounded-lg text-2xl font-semiBold leading-relaxed"
          >
            Submit
          </button>
        </div>
        {statusMessage && (
          <div className="mt-4 text-lg font-medium text-primaryColors-75">
            {statusMessage}
          </div>
        )}
      </form>{" "}
    </div>
  );
};

export default ContactForm;