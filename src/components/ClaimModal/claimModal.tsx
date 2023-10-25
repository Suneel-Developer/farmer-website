// Modal.tsx
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bg-black bg-opacity-50 inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-full max-w-xl mx-auto my-6">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-4 p-4 w-full bg-white outline-none focus:outline-none">
            <IoIosCloseCircle  onClick={onClose} className="absolute right-2 top-2 w-8 h-8 cursor-pointer" />
          <h2 className="mt-5 text-xl font-medium text-black">
            Balance: <span className="font-normal text-lg">1320</span>
          </h2>
          <h2 className="text-xl font-medium text-black">
            Next Claim: <span className="font-normal text-lg">13h 59m 20s</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
