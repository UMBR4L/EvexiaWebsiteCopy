import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

import styles from "../style";
import logo from "../assets/logos/Sideways.png";
import logo_animated from "../assets/gifs/Loading-Once.gif";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [gifUrl, setGifUrl] = useState<string>(logo_animated);
  const location = useLocation();
  const currentPath = location.pathname;

  //   useEffect(() => {
  //     const handleClickOutside = (event: MouseEvent) => {
  //         if (
  //             isOpen &&
  //             !event
  //                 .composedPath()
  //                 .some((el: Element) =>
  //                     (el as HTMLElement).classList?.contains("nav-overlay")
  //                 )
  //         ) {
  //             setIsOpen(false);
  //         }
  //     };

  //     document.addEventListener("click", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, [isOpen]);

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
      className={`flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 `}
    >
      <li className={`${styles.pop_sm} hover:underline `}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
      </li>
      <li className={`${styles.pop_sm} hover:underline`}>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
      </li>
      <li className={`${styles.pop_sm} hover:underline`}>
        <Link to="/resources" onClick={() => setIsOpen(false)}>
          Resources
        </Link>
      </li>
      <li className={`${styles.pop_sm} hover:underline`}>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="font-inter fixed md:sticky w-full z-10">
      {isVisible && (
        <div
          className={`nav-overlay modal-overlay px-7 ${
            isOpen ? "animate-slide-left" : "animate-slide-up"
          } z-10 absolute h-screen flex flex-col right-0  bg-secondary w-[350px] rounded-tl-3xl rounded-bl-3xl md:hidden  
           p-4 drop-shadow-lg border-l-4 border-y-4 border-dimPrimary `}
        >
          <div className="flex flex-col">
            <div className="mt-4 mb-6 flex flex-row justify-between items-center">
              <img src={gifUrl} className="w-[40px]" />

              {currentPath !== "/login" && (
                <div className={`${styles.pop_sm} font-medium`}>
                  <Link
                    to="/login"
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
                <IoCloseOutline className="w-8 h-8 text-primary z-11" />
              </button>
            </div>

            <div className="bg-primary w-full h-[1px] "></div>

            <div className="text-primary px-2 mt-5">{navLinks}</div>
          </div>
        </div>
      )}
      <div
        className={`top-0 bg-primary ${styles.paddingX} py-7 shadow-md shadow-navBarSecondary flex justify-between items-center`}
      >
        <img className="w-[120px] md:w-[150px]" src={logo} alt="Logo" />
        <div className="hidden md:flex md:text-secondary justify-center items-center text-lg">
          {navLinks}
        </div>
        <div className="flex justify-center items-center">
          {currentPath !== "/login" && (
            <Link
              to="/login"
              className={`bg-secondary text-primary px-5 py-2 rounded-xl p-4 drop-shadow-lg border-4 border-dimPrimary`}
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
