import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import "./preloader.scss";
import { checkPreloaderCoolDown } from "../utils/checkPreloaderCoolDown";
import { preLoaderAnim } from "../utils/Animation/preloader";

const Preloader = () => {
  useGSAP(() => {
    if (checkPreloaderCoolDown()) {
      preLoaderAnim(); // Assuming this function handles GSAP animations
    }
  });

  useEffect(() => {
    // Additional logic if needed when component mounts or updates
  }, []);

  return (
    <>
      {checkPreloaderCoolDown() && (
        <div className="preloader">
          <div className="textContainer">
            <span className="text">Design,</span>
            <span className="text">Develop,</span>
            <span className="text">Build.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
