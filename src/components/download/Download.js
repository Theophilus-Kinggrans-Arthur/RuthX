import React, { useEffect } from "react";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import "./Download.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2>RUTHX MESSENGER DOWNLOAD</h2>
        <p className="u-text-small u-text-light">
          Our apps are Availabe for downloads on all stores.
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
              <GrAndroid /> <p>Android</p>
            </div>
            <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>
            <div className="download-icon">
              <FaWindows /> <p>Windows</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
