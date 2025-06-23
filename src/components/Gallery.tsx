import React, { useState } from "react";
import port1 from "../assets/images/port1.jpeg";
import port2 from "../assets/images/port2.jpeg";
import port3 from "../assets/images/port3.jpeg";
import port4 from "../assets/images/port4.jpeg";
import port5 from "../assets/images/port5.jpeg";
import port6 from "../assets/images/port6.jpeg";
import port7 from "../assets/images/port7.jpeg";
import port8 from "../assets/images/port8.jpeg";
import port9 from "../assets/images/port9.jpeg";
import port10 from "../assets/images/port10.jpeg";
import port11 from "../assets/images/port11.jpeg";
import port12 from "../assets/images/port12.jpeg";
import port13 from "../assets/images/port13.jpeg";
import port14 from "../assets/images/port14.jpeg";
import port15 from "../assets/images/port15.jpeg";
import port16 from "../assets/images/port16.jpeg";
import port17 from "../assets/images/port17.jpeg";
import port18 from "../assets/images/port18.jpeg";
import port19 from "../assets/images/port19.jpeg";
import port20 from "../assets/images/port20.jpeg";
import port21 from "../assets/images/port21.jpeg";
import port22 from "../assets/images/port22.jpeg";
import port23 from "../assets/images/port23.jpeg";
import port24 from "../assets/images/port24.jpeg";
import port25 from "../assets/images/port25.jpeg";
import port26 from "../assets/images/port26.jpeg";
import port27 from "../assets/images/port27.jpeg";
import { Link } from "react-router-dom";
import AlertModal from "./AlertModal";

const categories = [
  "All",
  "Childhood",
  "Family and Friends",
  "Work",
  "Folashade ♡",
];

const photos = [
  {
    src: port1,
    alt: "Folashade in purple",
    category: "Childhood",
    caption: {
      title: "Childhood",
      subtitle: "Folashade in Primary School",
    },
    span: "row-span-2",
  },
  {
    src: port19,
    alt: "Folashade in patterned outfit",
    category: "Work",
    caption: {
      title: "Work",
      subtitle: "Folashade appointed as Work",
    },
    span: "row-span-1",
  },
  {
    src: port3,
    alt: "Folashade in blue wrap",
    category: "Family and Friends",
    caption: {
      title: "Family and Friends",
      subtitle: "Folashade at her Brother's Graduation",
    },
    span: "row-span-1",
  },
  {
    src: port4,
    alt: "Smiling in green attire",
    category: "Childhood",
    caption: {
      title: "Childhood",
      subtitle: "Folashade Growing Up",
    },
    span: "row-span-2",
  },
  {
    src: port5,
    alt: "Smiling in green dress again",
    category: "Work",
    caption: {
      title: "Work",
      subtitle: "Folashade's 1 Year Anniversary as Work",
    },
    span: "row-span-1",
  },
  {
    src: port6,
    alt: "Folashade posing in light blue dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade's Marriage",
    },
    span: "row-span-1",
  },
  {
    src: port7,
    alt: "Folashade in red dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade With Her Children",
    },
    span: "row-span-2",
  },
  {
    src: port8,
    alt: "Smiling in green dress again",
    category: "Family and Friends",
    caption: {
      title: "Family and Friends",
      subtitle: "Folashade at a Friend's Wedding",
    },
    span: "row-span-1",
  },
  {
    src: port9,
    alt: "Folashade posing in light blue dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade Being Folashade",
    },
    span: "row-span-1",
  },
  {
    src: port10,
    alt: "Folashade posing in light blue dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade Being Folashade",
    },
    span: "row-span-1",
  },
  {
    src: port11,
    alt: "Folashade in purple",
    category: "Childhood",
    caption: {
      title: "Childhood",
      subtitle: "Folashade in Primary School",
    },
    span: "row-span-2",
  },
  {
    src: port12,
    alt: "Folashade in patterned outfit",
    category: "Work",
    caption: {
      title: "Work",
      subtitle: "Folashade appointed as Work",
    },
    span: "row-span-1",
  },
  {
    src: port13,
    alt: "Folashade in blue wrap",
    category: "Family and Friends",
    caption: {
      title: "Family and Friends",
      subtitle: "Folashade at her Brother's Graduation",
    },
    span: "row-span-1",
  },
  {
    src: port14,
    alt: "Smiling in green attire",
    category: "Childhood",
    caption: {
      title: "Childhood",
      subtitle: "Folashade Growing Up",
    },
    span: "row-span-2",
  },
  {
    src: port15,
    alt: "Smiling in green dress again",
    category: "Work",
    caption: {
      title: "Work",
      subtitle: "Folashade's 1 Year Anniversary as Work",
    },
    span: "row-span-1",
  },
  {
    src: port16,
    alt: "Folashade posing in light blue dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade's Marriage",
    },
    span: "row-span-1",
  },
  {
    src: port17,
    alt: "Folashade in red dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade With Her Children",
    },
    span: "row-span-2",
  },
  {
    src: port18,
    alt: "Smiling in green dress again",
    category: "Family and Friends",
    caption: {
      title: "Family and Friends",
      subtitle: "Folashade at a Friend's Wedding",
    },
    span: "row-span-1",
  },
  {
    src: port19,
    alt: "Folashade posing in light blue dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade Being Folashade",
    },
    span: "row-span-1",
  },
  {
    src: port20,
    alt: "Folashade in red dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade With Her Children",
    },
    span: "row-span-2",
  },
  {
    src: port21,
    alt: "Folashade in purple",
    category: "Childhood",
    caption: {
      title: "Childhood",
      subtitle: "Folashade in Primary School",
    },
    span: "row-span-2",
  },
  {
    src: port22,
    alt: "Folashade in patterned outfit",
    category: "Work",
    caption: {
      title: "Work",
      subtitle: "Folashade appointed as Work",
    },
    span: "row-span-1",
  },
  {
    src: port23,
    alt: "Folashade in blue wrap",
    category: "Family and Friends",
    caption: {
      title: "Family and Friends",
      subtitle: "Folashade at her Brother's Graduation",
    },
    span: "row-span-1",
  },
  {
    src: port24,
    alt: "Smiling in green attire",
    category: "Childhood",
    caption: {
      title: "Childhood",
      subtitle: "Folashade Growing Up",
    },
    span: "row-span-2",
  },
  {
    src: port25,
    alt: "Smiling in green dress again",
    category: "Work",
    caption: {
      title: "Work",
      subtitle: "Folashade's 1 Year Anniversary as Work",
    },
    span: "row-span-1",
  },
  {
    src: port26,
    alt: "Folashade posing in light blue dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade's Marriage",
    },
    span: "row-span-1",
  },
  {
    src: port27,
    alt: "Folashade in red dress",
    category: "Folashade ♡",
    caption: {
      title: "Folashade ♡",
      subtitle: "Folashade With Her Children",
    },
    span: "row-span-2",
  },
  {
    src: port14,
    alt: "Smiling in green attire",
    category: "Childhood",
    caption: {
      title: "Childhood",
      subtitle: "Folashade Growing Up",
    },
    span: "row-span-1",
  },
  {
    src: port15,
    alt: "Smiling in green dress again",
    category: "Work",
    caption: {
      title: "Work",
      subtitle: "Folashade's 1 Year Anniversary as Work",
    },
    span: "row-span-1",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const handleImageClick = (photo: { src: string; alt: string }) => {
    setSelectedImage(photo);
    setIsOpen(true);
  };

  const filteredPhotos =
    activeTab === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeTab);

  return (
    <>
      <div className="px-4 tab:px-6 xl:px-10 py-8 tab:pt-12 tab:pb-4 select-none w3-animate-opacity">
        {/* Modal */}
        <AlertModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          image={selectedImage ?? undefined}
        />
        {/* Header */}
        <div className="flex flex-col tab:flex-row justify-between items-start tab:items-center mb-8 lg:mb-12 gap-4 sss">
          <div className="sborder-4 w3-animate-right">
            <div className="flex items-center mb-1 text-sm text-gray-600 font-medium">
              <div className="w-full h-0.5 bg-[#150061] mr-2" />
              <div className="whitespace-nowrap instruFont lg:text-base xl:text-lg">
                Funṣo & Fola Tooki
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 playfairFont">
              Photo Gallery
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 text-sm lg:text-base xl:text-lg font-medium text-gray-600 w3-animate-left">
            {/* {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                {idx > 0 && <span className="text-gray-400">||</span>}
                <button
                  onClick={() => setActiveTab(cat)}
                  className={`${
                    activeTab === cat
                      ? "text-[#863373] font-semibold"
                      : "hover:text-[#863373] transition ease-in-out duration-500 cursor-pointer hover:scale-[1.02]"
                  }`}
                >
                  {cat}
                </button>
              </React.Fragment>
            ))} */}
            <h1 className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 playfairFont">
              27th June
            </h1>
          </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 tab:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() =>
                handleImageClick({ src: photo.src, alt: photo.alt })
              }
              className={`relative overflow-hidden rounded shadow-2xl shadow-[#3F014733] ${photo.span}`}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition duration-500 cursor-pointer hover:scale-[1.04]"
              />
              {/* {photo.caption && (
                <div className="absolute bottom-0 left-0 w-full bg-[#3F014733] text-white text-xs py-2 px-3 invisibles ">
                  <p className="font-bold ">{photo.caption.title}</p>
                  <p>{photo.caption.subtitle}</p>
                </div>
              )} */}
            </div>
          ))}
        </div>
        {/* Floating Button */}
        <Link to="/wishme">
          <button
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-full text-[10px] tab:text-xs text-white border-[#B79D52] mt-4 fixed bottom-4 animate-pulses backdrop-blur-sm backdrop-invert mix-blend-differences bg-[#1e2941]/70 z-40 right-2 md:right-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] h-[68px] w-[68px] tab:h-20 tab:w-20 lg:h-24 lg:w-24 z-10"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Send a Birthday Wish
          </button>
        </Link>{" "}
        <div className="">
          <div className="attribution underline-offset-4 whitespace-nowraps poppinsFont text-center text-black text-sm sborder-4 mt-8 px-[10%] text-center sborder-2">
            <a
              href="https://www.linkedin.com/in/oluwajomiloju-tooki-81336b268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-base underline decoration-dotted"
              target="_blank"
            >
              Oluwajomiloju Tooki
            </a>{" "}
            ✦
            <a
              href="https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/"
              className="text-base underline decoration-dotted"
              target="_blank"
            >
              {" "}
              Rerel'Oluwa Tooki{" "}
            </a>{" "}
            ✦ Designed by{" "}
            <a
              href="https://www.linkedin.com/in/ikeokwu-somtochi/"
              className="text-base underline decoration-dotted"
              target="_blank"
            >
              Ikeokwu Somtochi
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
