import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedNetwork } from "../../actions";
import Frame from "../../assets/Frame.png";
import Icon from "../../assets/icon.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";

const NavbarDropDown: React.FC = () => {
  const selectedNetwork = useSelector((state) => state.network);
  const dispatch = useDispatch();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropdownData = [
    {
      id: 1,
      image: Frame,
      title: "Ethereum",
    },
    {
      id: 2,
      image: Icon,
      title: "Arbitrum",
    },
    {
      id: 3,
      image: Frame,
      title: "Optimism",
    },
    {
      id: 4,
      image: Icon,
      title: "Polygon",
    },
    {
      id: 5,
      image: Icon,
      title: "Base",
    },
    {
      id: 6,
      image: Icon,
      title: "BNB Chain",
    },
    {
      id: 7,
      image: Icon,
      title: "Avalanche",
    },
    {
      id: 8,
      image: Icon,
      title: "Celo",
    },
  ];

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleNetworkSelection = (network: {
    id: number;
    image: string;
    title: string;
  }) => {
    dispatch(setSelectedNetwork(network));
    setIsDropDownOpen(false);
  };

  return (
    <div>
      <div className="relative">
        <div
          className="flex justify-center items-center gap-4 p-3 rounded-xl cursor-pointer"
          onClick={toggleDropDown}
        >
          {selectedNetwork ? (
            <div className="flex items-center gap-2 text-white">
              <div className="border border-transparent_200 w-10 h-10 flex justify-center items-center rounded-xl ">
                <img
                  src={selectedNetwork.image}
                  alt={selectedNetwork.title}
                  className="w-4 h-4"
                />
              </div>
              <span>{selectedNetwork.title}</span>
            </div>
          ) : (
            <img src={Frame} alt="frame" className="h-4" />
          )}
          {isDropDownOpen ? (
            <IoIosArrowUp className="text-white" />
          ) : (
            <IoIosArrowDown className="text-white" />
          )}
        </div>

        {isDropDownOpen && (
          <div className="absolute z-10 mt-2 w-64 -right-5 md:right-0 p-2 text-white rounded-xl shadow-navbarShadow bg-dropdown_bg border border-dropdown_border">
            {dropdownData.map((network) => (
              <li
                key={network.id}
                onClick={() => handleNetworkSelection(network)}
                className="rounded-xl p-2 transition duration-200 hover:bg-transparent_700 cursor-pointer flex justify-between gap-2 items-center"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={network.image}
                    alt={network.title}
                    className="w-4 h-4"
                  />
                  <span className="text-base font-medium">{network.title}</span>
                </div>
                {selectedNetwork.id === network.id && (
                  <IoCheckmarkOutline className="w-4 h-4 text-icon_color" />
                )}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarDropDown;
