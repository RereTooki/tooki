import React, { useRef, useState } from "react";
import "../App.css";
import Landing from "./Landing";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

const Homepage = () => {
  // Create refs for each section
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* <div className="border-2" data-aoss="fade-up" data-aos-duration="1200">
        Homepage
        <Link to="/wishme">Send a Message</Link>
      </div> */}
      <div className="scroll">
        <Landing projectsRef={projectsRef} />
      </div>
      <div ref={projectsRef} className="scroll">
        <Gallery />
      </div>
    </>
  );
};

export default Homepage;
