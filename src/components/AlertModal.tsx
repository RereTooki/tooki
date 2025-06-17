import React from "react";
import { Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import port1 from "../assets/images/port1.png";
import port2 from "../assets/images/port2.png";
import port3 from "../assets/images/port3.png";
import port4 from "../assets/images/port4.png";
import port5 from "../assets/images/port5.png";
import port6 from "../assets/images/port6.png";
import port7 from "../assets/images/port7.png";
import port8 from "../assets/images/port8.png";
import { Link } from "react-router-dom";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  image?: { src: string; alt: string };
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-40" onClose={onClose}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Centered Panel */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Dialog.Panel
          data-aos="zoom-in"
          data-aos-duration="800"
          className="relative w-full max-w-xl xmd:max-h-[500px] ss-[70vss] sm:ss-[75vss] md:ss-[80vss] lg:ss-[85vss] h-[80vh] xmd:h-[90vh] w-[90vw] smax-h-[342.5px] smax-w-[300.5px] rounded-xl overflow-hidden bg-white/90 shadow-2xl backdrop-blur-xl flex items-center justify-center border-4 border-double border-[#411E31]/70"
        >
          {/* Close Buttons */}
          <button
            className="absolute top-4 right-2 z-10 text-gray-700 hover:text-[#863373] transition"
            onClick={onClose}
          >
            <IoMdClose className="h-6 w-6" />
          </button>
          <div className="w-full h-full border-x-4 border-black/90 border-double flex items-center justify-center">
            {/* Image */}
            {image && (
              <div className="w-fit h-fit flex items-center justify-center p-2 py-12 md:py-8 shadow-[#7E14651A] object-cover xmd:object-contain ">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="smax-h-full smax-w-full  object-cover xmd:object-contain rounded-lg shadow-xl transition duration-300 shadow-[#7E14651A] min-h-[244px] h-full w-[90%]"
                />
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AlertModal;
