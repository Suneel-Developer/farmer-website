import kamilkacki from "../assets/kamilkacki.png";
import farmer from "../assets/farmer.png";
import bg from "../assets/bg.png";
import LazerZeroLogo from "../assets/LayerZero_Logo.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import { CgChevronDoubleRight } from "react-icons/cg";

import DropdownComponent from "../components/Dropdown/dropdown";

const Bridge: React.FC = () => {
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
          mint and bridge
        </h1>
        <p className="text-dark_white text-base mb-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeius amod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center my-3">
          <img src={kamilkacki} alt="kamilkacki Man" />
        </div>

        <h2 className="text-lg md:text-2xl font-bold tracking-tracking2 uppercase">
          NFT NAME
        </h2>
        <p className="text-base text-transparent_500 font-normal">
          Select your destination network below
        </p>

        <div className="flex justify-between items-center flex-col md:flex-row gap-5 md:gap-2 my-5 w-full">
          <DropdownComponent />

          <div>
            <CgChevronDoubleRight className="text-white text-lg md:rotate-0 rotate-90" />
          </div>

          <DropdownComponent />
        </div>

        <hr className="w-full h-px border border-transparent_200 my-3" />
        <ul className="flex justify-between items-center text-transparent_500 text-base">
          <li>Transaction Fee</li>
          <li>0.00025 ETH</li>
        </ul>

        <button className="w-full bg-vibrant_yellow rounded-xl text-black font-semibold text-base uppercase p-3 my-5">
          MINT & BRIDGE
        </button>

        <hr className="max-w-hrMax-width w-full h-px mx-auto border border-transparent_200 my-3" />

        <div className="flex justify-center items-center gap-3">
          <span className="text-base leading-16 font-normal">Powered by</span>
          <img src={LazerZeroLogo} alt="Lazer Zero" className=" w-28 h-8" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bridge;
