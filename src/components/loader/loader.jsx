import React, { useState, useEffect } from "react";
import "./loaderStyles.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 10; // 10ms interval for a higher refresh rate
    const increment = 0.67; // Increase by 0.67% every 10ms to complete in 1.5 seconds

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

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
              transition: "width 0.01s ease-out", // Smooth transition
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
