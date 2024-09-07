import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { BsInfoCircle } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

import styles from "../style";
import logoMobile from "../assets/logos/EvexiaLogo__Small.svg";
import logoDesktop from "../assets/logos/EvexiaLogo__WithText.png";
import logo_animated from "../assets/gifs/Loading-Once.gif";
import book_appointment from "../assets/buttons/BookAppointment.png";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [gifUrl, setGifUrl] = useState<string>(logo_animated);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  const navLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="w-full fixed z-10 bg-shadesColors-0">
      {/* {isVisible && (
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
      )} */}

      {/* Mobile Layout */}
      <div className="top-0 grid grid-cols-4 gap-x-gutter mx-mobile-margin justify-between items-center h-12 md:hidden">
        {/* Column 1: Hamburger Menu and Logo */}
        <div className="col-span-1 flex justify-between">
          {/* Hamburger Menu for Mobile */}
          <button className="focus:outline-none" onClick={toggleMenu}>
            {isOpen ? (
              <IoCloseOutline className="w-8 h-8 text-secondary" />
            ) : (
              <RxHamburgerMenu className="w-8 h-8 text-secondary" />
            )}
          </button>

          {/* Mobile Logo */}
          <Link to="/">
            <img className="w-[2.125rem]" src={logoMobile} alt="Mobile Logo" />
          </Link>
        </div>

        {/* Mobile Menu (shows up when Hamburger Menu is clicked) */}
        {isOpen && (
          <div className="flex flex-col items-center space-y-6 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/appointment" onClick={() => setIsOpen(false)}>
              <img
                src={book_appointment}
                alt="Book Appointment"
                className="w-40"
              />
            </Link>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex grid-cols-12 gap-x-gutter mx-desktop-margin justify-between items-center h-16">
        {/* Column 1: Desktop Logo */}
        <div className="col-span-2">
          <Link to="/">
            <img className="w-32" src={logoDesktop} alt="Desktop Logo" />
          </Link>
        </div>

        {/* Column 2: Desktop Menu */}
        <div className="col-span-8 flex justify-center space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Column 3: Book Appointment Button */}
        <div className="col-span-2">
          <Link to="/appointment">
            <img
              src={book_appointment}
              alt="Book Appointment"
              className="w-40"
            />
          </Link>
        </div>
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
    </nav>
  );
};

export default NavBar;
