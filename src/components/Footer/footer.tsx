import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <>
      <hr className=" w-11/12 sm:hidden block h-px border border-transparent_200 m-auto mb-4" />
      <div className="flex w-full items-center justify-between px-5">
        <div className="flex-1">
          <hr className="max-w-hrMax-width hidden sm:block w-full h-px border border-transparent_200 my-3" />
          <h1 className="text-base font-normal text-white">
            ©2023. Farmerio Inc.
          </h1>
        </div>
        <div className="flex-1 flex flex-col justify-end items-end">
          <hr className="max-w-hrMax-width hidden sm:block w-full h-px border border-transparent_200 my-3" />
          <h1 className="text-base font-normal text-white flex items-center gap-2">
            <AiOutlineTwitter className=" w-5 h-4" /> Follow Us
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
