import React, { useState } from "react";
import kamilkacki from "../assets/kamilkacki.png";
import farmer from "../assets/farmer.png";
import bg from "../assets/bg.png";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMinusSm } from "react-icons/hi";
import LayerZero from "../assets/LayerZero_Logo.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import DropdownComponent from "../components/Dropdown/dropdown";

const Mint: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

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
        <h1 className="text-white text-28 md:text-4xl font-bold tracking-tracking1">
          MINT YOUR NFT
        </h1>

        <p className="text-dark_white text-base mb-2 font-normal">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeius amod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex justify-center my-3">
          <img src={kamilkacki} alt="kamilkacki Man" />
        </div>

        <h2 className="text-2xl font-bold text-white mt-3">NFT NAME </h2>
        <p className="text-transparent_500 text-base font-normal">
          Below you see the target network. <br />
          You can also choose the number of NFTs.
        </p>
        <div className="flex gap-4 mt-4 md:flex-row flex-col">
          <div className="flex items-center gap-5 flex-1">
            <button
              onClick={decrementCount}
              className="bg-transparent_100 border border-transparent_100 text-white w-12 h-12 rounded-xl flex justify-center items-center"
            >
              <HiMinusSm />
            </button>
            <p>{count}</p>
            <button
              onClick={incrementCount}
              className="bg-transparent_100 border border-transparent_100 text-white w-12 h-12 rounded-xl flex justify-center items-center"
            >
              <AiOutlinePlus />
            </button>
          </div>
          {/* <div className="flex items-center gap-3 ">
            <div className="flex justify-center items-center w-11 h-11 border border-transparent_200 rounded-xl">
              <img src={Frame} alt="frame" className="h-4" />
            </div>
            <p className="text-white font-medium text-base sm:block hidden">
              Arbitrum
              <span className="text-transparent_500 font-normal"> Network</span>
            </p>
          </div> */}
          <div className="flex flex-1">
            <DropdownComponent />
          </div>
        </div>

        <hr className="w-full h-px mx-auto border border-transparent_200 my-4" />

        <button
          onClick={toggleDiv}
          className="w-full bg-vibrant_yellow text-center rounded-xl text-black font-semibold text-base uppercase p-3 my-3"
        >
          MINT NOW
        </button>
        {showDiv && (
          <div>
            <hr className="w-full h-px mx-auto border border-transparent_200 my-4 " />
            <div className="flex justify-between items-center gap-2">
              <div className="bg-transparent_200 rounded h-4 w-9/12">
                <div className="bg-vibrant_yellow rounded w-3/5 h-full shadow-sliderShadow"></div>
              </div>
              <span className="text-14 text-transparent_500 w-3/12 text-right">
                3 / 8 - 48%
              </span>
            </div>
          </div>
        )}
        <hr className="max-w-hrMax-width w-full h-px mx-auto border border-transparent_200 my-4 " />
        <div className="flex justify-center items-center gap-2 opacity-20">
          <p className="text-white text-base font-normal">Powered by</p>
          <img src={LayerZero} alt="logo" width={118} height={32} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mint;
