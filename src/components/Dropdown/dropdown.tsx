import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedNetwork } from "../../actions";
import Frame from "../../assets/Frame.png";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const networks = [
  {
    id: 1,
    title: "Sepolia",
    network: "Destination",
  },
  {
    id: 2,
    title: "Network",
    network: "Destination Network",
  },
  {
    id: 3,
    title: "Ethereum",
    network: "Destination Network",
  },
];

const DropdownComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(networks[0]);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectOption = (option: {
    id: number;
    title: string;
    network: string;
  }) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  return (
    <div className="relative inline-block w-full flex-1">
      <div
        className={`bg-transparent_100 rounded-3xl flex items-center gap-4 w-full p-3 relative cursor-pointer ${
          isDropdownVisible ? "bg-red-500" : "bg-red-400"
        }`}
        onClick={toggleDropdown}
      >
        <div className="flex justify-center items-center w-11 h-11 border border-transparent_200 rounded-xl">
          <img src={Frame} alt="frame" className="h-4" />
        </div>
        <div>
          <h4 className="text-base font-medium">{selectedOption.title}</h4>
          <span className="text-12 text-opacity-50">
            {selectedOption.network}
          </span>
        </div>
        <div className="ml-2">
          {isDropdownVisible ? (
            <AiFillCaretUp className="absolute right-4 top-7 w-4 text-white" />
          ) : (
            <AiFillCaretDown className="absolute right-4 top-7 w-4 text-white" />
          )}
        </div>
      </div>

      {isDropdownVisible && (
        <ul className="bg-drawer_bg rounded-3xl flex flex-col w-full cursor-pointer z-10 absolute top-20">
          {networks.map((option) => (
            <li
              key={option.id}
              className="rounded-3xl flex items-center gap-4 w-full px-3 cursor-pointer h-76 hover:bg-transparent_600 transition duration-200"
              onClick={() => selectOption(option)}
            >
              <div className="flex justify-center items-center w-11 h-11 border border-transparent_200 rounded-xl">
                <img src={Frame} alt="frame" className="h-4" />
              </div>
              <div>
                <h4 className="text-base font-medium">{option.title}</h4>
                <span className="text-12 text-opacity-50">
                  {option.network}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;
