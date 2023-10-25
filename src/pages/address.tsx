import React, { useState } from "react";
import farmer from "../assets/farmer.png";
import bg from "../assets/bg.png";
import Frame from "../assets/Frame.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./../components/Footer/footer";
import DropdownComponent from "../components/Dropdown/dropdown";

const Address: React.FC = () => {
  return (
    <div
      className="p-3 bg-fixed bg-center bg-no-repeat	"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="fixed inset-y-0 -left-20 max-lg:hidden flex justify-center items-center">
        <div
          className="w-70 h-70 bg-cover"
          style={{ backgroundImage: `url(${farmer})` }}
        ></div>
      </div>
      <Navbar />
      <div className="max-w-faqMax-width w-full mx-auto bg-gradient-bg from-opacity-5 to-opacity-0 rounded-2xl p-7 md:p-10 text-white flex flex-col gap-2 mt-2 lg:mt-10">
        <h1 className="text-28 md:text-4xl font-bold tracking-tracking1 uppercase">
          FREE ADDRESS
        </h1>
        <p className="text-dark_white text-base mb-2">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint. <br /> <br />
          Occaecati cupiditate non provident similique sunt in culpa qui officia
          deserunt mollitia animi id est laborum et dolorum fuga. Et harum
          quidem rerum facilis est et expedita distinctio.
        </p>

        <p className="text-base font-normal">
          Please select the network and enter the amount you want to send.
        </p>

        <hr className="max-w-hrMax-width w-full h-px mx-auto border border-transparent_200 my-7" />
        <DropdownComponent />

        <div className="border border-transparent_200 rounded-3xl flex items-center gap-4 w-full px-3 h-76 mt-3">
          <div className="flex justify-center items-center w-11 h-11 border border-transparent_200 rounded-xl">
            <img src={Frame} alt="frame" className="h-4" />
          </div>
          <div>
            <h4 className="text-base font-medium">0.0000068 ETH </h4>
            <span className="text-12 text-white text-opacity-50">
              Balance 0.0000539 ETH
            </span>
          </div>
        </div>

        <hr className="w-full h-px border border-transparent_200 my-7" />
        <ul className="flex justify-between items-center text-transparent_500 text-base">
          <li>Transaction Fee</li>
          <li>0.00025 ETH</li>
        </ul>

        <button className="w-full bg-vibrant_yellow rounded-xl text-black font-semibold text-base uppercase p-3 my-5">
          SEND
        </button>

        <hr className="max-w-hrMax-width w-full h-px mx-auto border border-transparent_200 my-3 lg:block hidden" />
      </div>
      <Footer />
    </div>
  );
};

export default Address;
