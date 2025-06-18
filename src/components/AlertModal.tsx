import React from "react";
import { Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  image?: { src: string; alt: string };
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-50" onClose={onClose}>
      {/* Translucent backdrop */}
      <div className="fixed inset-0 bg-black/70" />

      {/* Image-centered container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white hover:text-gray-300 z-50"
          onClick={onClose}
        >
          <IoMdClose className="h-7 w-7" />
        </button>

        {/* Image */}
        {image && (
          <div className="max-w-[90vw] max-h-[90vh]">
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            />
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default AlertModal;
