import React, { useState, useEffect } from "react";
import "./loaderStyles.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const intervalDuration = 1000 / 60; // 60 Hz refresh rate (~16.67ms)

  useEffect(() => {
    const increment = 100 / (1.5 * 60); // Progress increment for 1.5 seconds

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer); // Clear the interval when progress reaches 100%
          return 100;
        }
        return prevProgress + increment;
      });
    }, intervalDuration);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [intervalDuration]);

  return (
    <>
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>

      <div className="h-screen w-screen flex justify-center items-center mt-28 ml-2">
        <div className="w-[300px] h-2 bg-gray-700 rounded-full">
          <div
            className="h-full bg-slate-300 rounded-full"
            style={{
              width: `${progress}%`,
              transition: `width ${intervalDuration}ms linear`, // Smooth transition
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
