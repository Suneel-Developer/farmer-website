import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/icon3.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./../components/Footer/footer";
import farmer from "../assets/farmer.png";
import bg from "../assets/bg.png";

const Referral: React.FC = () => {
  const navigate = useNavigate();

  const navigateToWallet = () => {
    navigate("/connectwallet"); // Use history.push to navigate to the '/mintpage' route
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
      <div className="max-w-faqMax-width w-full mx-auto bg-gradient-bg from-opacity-5 to-opacity-0 rounded-2xl p-7 md:p-10 text-white flex flex-col gap-3 mt-2 lg:mt-10">
        <h1 className="text-28 md:text-4xl font-bold tracking-tracking1">
          REFER A FRIEND
        </h1>
        <p className="text-dark_white text-base">
          Invite your friends to mint NFT and earn a 20% commission. You can
          claim your earnings at any time!
        </p>
        <p className="text-white text-base">
          Before you get referral link, please connect your wallet.
        </p>
        <button
          onClick={navigateToWallet}
          className="w-full bg-vibrant_yellow text-center rounded-xl text-black font-semibold text-base uppercase p-3 my-3"
        >
          CONNECT WALLET
        </button>
        <hr className="max-w-hrMax-width w-full h-px mx-auto border border-transparent_200 my-4 " />
        <h2 className="text-lg md:text-2xl font-bold tracking-tracking2 uppercase">
          summary
        </h2>
        <p className="text-transparent_500 text-base">
          Data is displayed for the following network.
        </p>
        <div className="flex items-center gap-4">
          <img src={Icon} alt="icon" />
          <p className="text-white font-medium text-base">
            Arbitrum
            <span className="text-transparent_500 font-normal"> Network</span>
          </p>
        </div>
        <hr className=" w-full h-px mx-auto border border-transparent_200 my-4 " />
        <div className="flex justify-start gap-4 flex-col md:flex-row">
          <div className="flex-1">
            <h4 className="text-base font-normal text-white opacity-50">
              Claimed
            </h4>
            <hr className="w-3 border border-transparent_200 my-4 " />
            <p className="text-transparent_300 text-base font-normal">0.00</p>
          </div>
          <div className="flex-1">
            <h4 className="text-base font-normal text-white opacity-50">
              Unclaimed
            </h4>
            <hr className="w-3 border border-transparent_200 my-4 " />
            <p className="text-transparent_300 text-base font-normal">0.00</p>
          </div>
          <div className="flex-1">
            <h4 className="text-base font-normal text-white opacity-50">
              Mints
            </h4>
            <hr className="w-3 border border-transparent_200 my-4 " />
            <p className="text-transparent_300 text-base font-normal">0.00</p>
          </div>
        </div>
        <hr className=" w-full h-px mx-auto border border-transparent_200 my-4 " />
      </div>
      <Footer />
    </div>
  );
};

export default Referral;
