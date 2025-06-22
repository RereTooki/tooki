import React from "react";
import { Link } from "react-router-dom";
import WritingAnimation from "../animations/WritingAnimation";
import WritingAnimationDelay from "../animations/WritingAnimationDelay";
// Define types for props
type NavigationBarProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

const Landing: React.FC<NavigationBarProps> = ({ projectsRef }) => {
  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="h-dvh slg:h-[75vh] lg:border-4 lg:border-b-0 border-[#1e2941] border-double bg-[#FFE3F933]s aboutMeGrad flex flex-col gap-4 md:gap-2 lg:gap-8 justify-center items-center px-2 lg:px-8 shadow-md shadow-[#14327e1a]  w3-animate-opacity">
        <div className="sborder-2 instruFont text-[#676565] text-sm md:text-[2.5vw]  lg:text-xl xl:text-2xl selection:bg-[#676565] selection:text-[#fff]">
          {" "}
          <WritingAnimation text="The Tookis" />
        </div>
        <div className="sborder-2 playfairFont text-[#3A3A3A] selection:bg-[#676565] selection:text-[#fff] text-[9vw] lg:text-6xl xl:text-7xl font-bold text-center">
          <WritingAnimationDelay text="OLUFUNMISO TOOKI" />
          <WritingAnimationDelay text="FOLASHADE TOOKI" />
        </div>
        <Link to="/wishme">
          <div className="sborder-2 interFont text-[#F4EFEF] bg-gradient-to-r from-[#1e2941]/90 from-5% to-[#496091]/90  bg-[#411E31]s  text-sm lg:text-base xl:text-lgs font-medium p-3 tab:p-4 rounded-lg transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] animate-pulses select-none">
            Send a Wedding Anniversary / Birthday Wish
          </div>
        </Link>
        <div
          className="text-base md:text-[4.5vw] xmd:text-lg slg:hidden lg:text-xl sxl:text-2xl  sborder-4 whitespace-nowrap absolute sborder-4 bottom-2 md:bottom-4 lg:tracking-widers text-center self-center animate-bounce select-none hover:underline underline-offset-4 decoration-dotted"
          onClick={() => scrollToSection(projectsRef)}
        >
          <p className="w3-animate-bottom2 cursor-pointer hover:scale-[1.05] ease-in-out duration-500 delay-50">
            View Gallery
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
