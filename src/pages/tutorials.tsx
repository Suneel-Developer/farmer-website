import React from "react";
import Icon from "../assets/icon2.png";
import { FaTwitter } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import farmer from "../assets/farmer.png";
import bg from "../assets/bg.png";

const Tutorials: React.FC = () => {
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
      <div className="max-w-faqMax-width w-full mx-auto bg-gradient-bg from-opacity-5 to-opacity-0 rounded-2xl p-7 md:p-10 text-white flex flex-col gap-4 mt-7 lg:mt-10">
        <h1 className="text-28 md:text-4xl font-bold tracking-tracking1">
          TUTORIALS
        </h1>
        <p className="text-dark_white text-base">
          Select a chain from below to read our recommendations.
        </p>
        <hr className="max-w-hrMax-width w-full h-px mx-auto border border-transparent_200 my-5" />
        <div className="w-full flex justify-between items-center gap-4 flex-wrap">
          <button className="border border-white border-opacity-10 text-transparent_500 text-base p-2 rounded-xl w-full sm:w-40 h-11 bg-gradient-bg from-opacity-5 focus:outline-none focus:border focus:border-vibrant_yellow hover:border-vibrant_yellow transition duration-200">
            Base
          </button>
          <button className="border border-white border-opacity-10 text-transparent_500 text-base p-2 rounded-xl w-full sm:w-40 h-11 bg-gradient-bg from-opacity-5 focus:outline-none focus:border focus:border-vibrant_yellow hover:border-vibrant_yellow transition duration-200">
            zkSync
          </button>
          <button className="border border-white border-opacity-10 text-transparent_500 text-base p-2 rounded-xl w-full sm:w-40 h-11 bg-gradient-bg from-opacity-5 focus:outline-none focus:border focus:border-vibrant_yellow hover:border-vibrant_yellow transition duration-200">
            Network
          </button>
          <button className="border border-white border-opacity-10 text-transparent_500 text-base p-2 rounded-xl w-full sm:w-40 h-11 bg-gradient-bg from-opacity-5 focus:outline-none focus:border focus:border-vibrant_yellow hover:border-vibrant_yellow transition duration-200">
            Network
          </button>
          <button className="border border-white border-opacity-10 text-transparent_500 text-base p-2 rounded-xl w-full sm:w-40 h-11 bg-gradient-bg from-opacity-5 focus:outline-none focus:border focus:border-vibrant_yellow hover:border-vibrant_yellow transition duration-200">
            Network
          </button>
          <button className="border border-white border-opacity-10 text-transparent_500 text-base p-2 rounded-xl w-full sm:w-40 h-11 bg-gradient-bg from-opacity-5 focus:outline-none focus:border focus:border-vibrant_yellow hover:border-vibrant_yellow transition duration-200">
            Network
          </button>
        </div>
        <div className="flex justify-center gap-2 items-start flex-wrap"></div>
        <div className="flex items-center gap-4">
          <img src={Icon} alt="frame" className="h-11 w-11" />
          <h2 className="font-bold tracking-tracking2 text-2xl">zkSync</h2>
        </div>

        <p className="text-base font-normal">
          Recommendation for the zkSync Network.
        </p>

        <ul className="text-base font-normal">
          <li>- min. 10 000 USD Volume</li>
          <li>- min. 100 Transactions</li>
          <li>- min. 10 000 USD Volume</li>
          <li>- min. 100 Transactions</li>
          <li>- min. 10 000 USD Volume</li>
          <li>- min. 100 Transactions</li>
        </ul>

        <p className="text-base font-normal">Explore some protocols below.</p>

        <ul className="flex items-center gap-7 flex-wrap justify-start mb-6">
          <li className="flex items-center gap-2 text-base">
            <FaTwitter className="text-xl" /> Name
          </li>
          <li className="flex items-center gap-2 text-base">
            <FaTwitter className="text-xl" /> Name
          </li>
          <li className="flex items-center gap-2 text-base">
            <FaTwitter className="text-xl" /> Name
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorials;
