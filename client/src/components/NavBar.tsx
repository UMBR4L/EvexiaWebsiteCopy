import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { BsInfoCircle } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

import styles from "../style";
import logo from "../assets/logos/Sideways.png";
import logo_animated from "../assets/gifs/Loading-Once.gif";
import book_appointment from "../assets/buttons/BookAppointment.png";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [gifUrl, setGifUrl] = useState<string>(logo_animated);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setGifUrl(`${logo_animated}?${new Date().getTime()}`);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 650);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const navLinks = (
    <ul
      className={`flex flex-col items-center space-y-4 md:flex-row md:space-x-10 md:space-y-0 leading-loose`}
    >
      {/* Separate Home Button
      <li className={`${styles.pop_sm} hover:underline`}>
        <div className="md:flex md:space-x-2">
          <div className="hidden md:flex">
            <GrHomeRounded className="w-6 h-6" />
          </div>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </div>
      </li> */}

      <li className={`${styles.pop_sm} hover:underline`}>
        <div className="md:flex md:space-x-2">
          {/* About Us icon */}
          {/* <div className="hidden md:flex">
            <BsInfoCircle className="w-6 h-6" />
          </div> */}
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
        </div>
      </li>
      {/* <li className={`${styles.pop_sm} hover:underline`}>
        <Link to="/resources" onClick={() => setIsOpen(false)}>
          Resources
        </Link>
      </li> */}

      <li className={`${styles.pop_sm} hover:underline`}>
        <div className="md:flex md:space-x-2">
          {/* Contact Us icon */}
          {/* <div className="hidden md:flex">
            <LuMail className="w-7 h-7" />
          </div> */}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      </li>

      <li>
        <div className="md:flex ml-5">
          <Link to="/appointment">
            <img
              src={book_appointment}
              alt="Book Appointment"
              className="w-42 h-auto"
            />
          </Link>
        </div>
      </li>
    </ul>
  );

  return (
    <div className="font-inter fixed w-full z-10 px-10 md:px-20">
      {isVisible && (
        <div
          className={`nav-overlay modal-overlay px-8 mt-[0px] ${
            isOpen ? "animate-slide-left" : "animate-slide-up"
          } z-10 absolute h-screen flex flex-col right-0  bg-dimPrimary backdrop-blur-xl w-[350px] rounded-tl-3xl rounded-bl-3xl md:hidden  
           p-4 drop-shadow-lg border-l-4 border-y-4 border-dimPrimary`}
        >
          <div className="flex flex-col">
            <div className="mt-4 mb-6 flex flex-row justify-between items-center">
              <img src={gifUrl} className="w-[40px]" />

              {currentPath !== "/app/login" && (
                <div className={`${styles.pop_sm} font-medium mr-[-90px]`}>
                  <Link
                    to="/app/login"
                    className={`bg-primary text-secondary px-5 py-2 rounded-xl  drop-shadow-sm border-4 border-navBarSecondary`}
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              )}

              <button
                className={`w-6 ${styles.pop} ease-out transition-all duration-150 self-end float-right`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <IoCloseOutline className="w-8 h-8 text-secondary z-11" />
              </button>
            </div>

            <div className="bg-primary w-full h-[1px] "></div>

            <div className="text-secondary text-2xl px-2 mt-5">{navLinks}</div>
          </div>
        </div>
      )}
      <div
        className={`top-0 bg-neutralColors-white backdrop-blur-xl ${styles.paddingX} py-7  flex justify-between items-center rounded-b-[20%]`}
      >
        <Link to="/">
          <img
            className={`w-[120px] md:w-[150px] ${styles.pop_sm}`}
            src={logo}
            alt="Logo"
          />
        </Link>

        <div className="hidden md:flex justify-center items-center text-lg">
          {navLinks}
        </div>

        {/* LOGIN BUTTON /*}
        {/* <div className="flex justify-center items-center">
          {currentPath !== "/app/login" && (
            <Link
              to="/app/login"
              className={`hidden xs:flex bg-secondary text-primary px-5 py-2 rounded-xl p-4 drop-shadow-lg border-4 border-dimPrimary`}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}

          <div className="md:hidden ml-5">
            <button
              className={`w-6 ${styles.pop}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen && (
                <RxHamburgerMenu className="w-8 h-8 text-secondary" />
              )}
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
