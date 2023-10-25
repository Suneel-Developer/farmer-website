import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Frame from "../../assets/Frame.png";
import Icon from "../../assets/icon.png";

import NavbarDropDown from "../NavbarDropDown/NavbarDropDown";
import Modal from "../ClaimModal/claimModal";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar  */}
      <div className="flex flex-col justify-center items-center w-full md:px-6  relative ">
        <div className="h-16 lg:h-12 w-full flex justify-between items-center gap-1 lg:mt-5 lg:px-4 rounded-3xl">
          <div>
            <img src={Logo} alt="logo" className="w-28 md:w-36 h-8 md:h-11" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 md:gap-3 items-center relative">
              <NavbarDropDown />
              <div onClick={toggleMobileMenu} className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="15"
                  viewBox="0 0 34 18"
                  fill="none"
                >
                  <path
                    d="M33 1H1M33 8.99937H1M9 16.9994H1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="square"
                  />
                </svg>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center gap-4 ">
              <span className="text-white text-base font-normal">
                0.28590 ETH
              </span>
              <div className="flex justify-center items-center gap-3 h-11 w-48 bg-transparent_200 rounded-xl ">
                <img src={Icon} alt="icon" className="h-4 w-4" />
                <p className="text-white text-base font-medium">
                  0x085m...2u58
                </p>
              </div>
              <button
                className="flex justify-center items-center gap-3 h-11 w-48 bg-vibrant_yellow rounded-xl text-base font-medium text-black"
                onClick={() => setIsModalOpen(true)}
              >
                CLAIM CHIA
              </button>
              
            </div>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex justify-center items-center gap-2 mt-12 text-lg font-normal w-full">
            {/* Mint Link  */}
            <Link
              to="/"
              className={`relative rounded-2xl py-3 px-6 cursor-pointer transition duration-200 text-white ${
                location.pathname === "/"
                  ? "text-opacity-100"
                  : "hover:bg-transparent_100 text-opacity-75"
              }`}
            >
              <span>Mint</span>
              {location.pathname === "/" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* Mint & Bridge Link  */}
            <Link
              to="/bridge"
              className={`relative rounded-2xl py-3 px-6 cursor-pointer transition duration-200 text-white ${
                location.pathname === "/bridge"
                  ? "text-opacity-100"
                  : "hover:bg-transparent_100 text-opacity-75"
              }`}
            >
              <span>Mint & Bridge</span>
              {location.pathname === "/bridge" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* Free Address Link  */}
            <Link
              to="/address"
              className={`relative rounded-2xl py-3 px-6 cursor-pointer transition duration-200 text-white ${
                location.pathname === "/address"
                  ? "text-opacity-100"
                  : "hover:bg-transparent_100 text-opacity-75"
              }`}
            >
              <span>Free Address</span>
              {location.pathname === "/address" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* Tutorials Link  */}
            <Link
              to="/tutorials"
              className={`relative rounded-2xl py-3 px-6 cursor-pointer transition duration-200 text-white ${
                location.pathname === "/tutorials"
                  ? "text-opacity-100"
                  : "hover:bg-transparent_100 text-opacity-75"
              }`}
            >
              <span>Tutorials</span>
              {location.pathname === "/tutorials" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* Referral Link  */}
            <Link
              to="/referral"
              className={`relative rounded-2xl py-3 px-6 cursor-pointer transition duration-200 text-white ${
                location.pathname === "/referral"
                  ? "text-opacity-100"
                  : "hover:bg-transparent_100 text-opacity-75"
              }`}
            >
              <span>Referral</span>
              {location.pathname === "/referral" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* FAQ Link  */}
            <Link
              to="/faq"
              className={`relative rounded-2xl py-3 px-6 cursor-pointer transition duration-200 text-white ${
                location.pathname === "/faq"
                  ? "text-opacity-100"
                  : "hover:bg-transparent_100 text-opacity-75"
              }`}
            >
              <span>FAQ</span>
              {location.pathname === "/faq" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 inset-0 bg-drawer_bg z-50 text-white w-full h-max items-start justify-start rounded-b-3xl p-5">
          {/* Logo and Close Menu Button  */}
          <div className="flex justify-between items-center gap-1">
            <img src={Logo} alt="logo" className="w-28 h-8" />
            <div onClick={closeMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
              >
                <path
                  d="M1 1H2.99963L10.9996 9H13M1 9H2.99963L10.9996 1H13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            </div>
          </div>

          {/* Navigation Links  */}
          <div className="flex flex-col gap-5 mt-10 text-lg font-normal w-full">
            {/* Mint Link  */}
            <Link
              to="/"
              className={`relative text-white ${
                location.pathname === "/"
                  ? "text-opacity-100 ml-7"
                  : "text-opacity-75"
              }`}
            >
              <span>Mint</span>
              {location.pathname === "/" && (
                <div className="absolute top-1/2 -left-5 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* Mint & Bridge Link  */}
            <Link
              to="/bridge"
              className={`relative text-white ${
                location.pathname === "/bridge"
                  ? "text-opacity-100 ml-7"
                  : "text-opacity-75"
              }`}
            >
              <span>Mint & Bridge</span>
              {location.pathname === "/bridge" && (
                <div className="absolute top-1/2 -left-5 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* Free Address Link  */}
            <Link
              to="/address"
              className={`relative text-white ${
                location.pathname === "/address"
                  ? "text-opacity-100 ml-7"
                  : "text-opacity-75"
              }`}
            >
              <span>Free Address</span>
              {location.pathname === "/address" && (
                <div className="absolute top-1/2 -left-5 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* Tutorials Link  */}
            <Link
              to="/tutorials"
              className={`relative text-white ${
                location.pathname === "/tutorials"
                  ? "text-opacity-100 ml-7"
                  : "text-opacity-75"
              }`}
            >
              <span>Tutorials</span>
              {location.pathname === "/tutorials" && (
                <div className="absolute top-1/2 -left-5 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* Referral Link  */}
            <Link
              to="/referral"
              className={`relative text-white ${
                location.pathname === "/referral"
                  ? "text-opacity-100 ml-7"
                  : "text-opacity-75"
              }`}
            >
              <span>Referral</span>
              {location.pathname === "/referral" && (
                <div className="absolute top-1/2 -left-5 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>

            {/* FAQ Link  */}
            <Link
              to="/faq"
              className={`relative text-white ${
                location.pathname === "/faq"
                  ? "text-opacity-100 ml-7"
                  : "text-opacity-75"
              }`}
            >
              <span>FAQ</span>
              {location.pathname === "/faq" && (
                <div className="absolute top-1/2 -left-5 transform -translate-x-1/2 w-4 h-px rounded bg-vibrant_yellow"></div>
              )}
            </Link>
          </div>

          <hr className="border border-transparent_200 my-6" />

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-11 h-11 border border-transparent_200 rounded-xl">
                <img src={Frame} alt="frame" className="h-4" />
              </div>
              <span className="text-white text-base font-normal">Ethereum</span>
              <span className="text-white text-base font-normal">
                0.28590 ETH
              </span>
            </div>
            <div className="flex justify-center items-center gap-3 h-11 w-full bg-transparent_200 rounded-xl ">
              <img src={Icon} alt="icon" className="h-4 w-4" />
              <p className="text-white text-base font-medium">0x085m...2u58</p>
            </div>
            <button className="flex justify-center items-center gap-3 h-11 w-full bg-vibrant_yellow rounded-xl text-base font-medium text-black " onClick={() => setIsModalOpen(true)}>
              CLAIM CHIA
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
