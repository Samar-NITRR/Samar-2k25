import React, { useState, useEffect } from "react";
import "./loaderStyles.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 20;
    const increment = 1.33;

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
              transition: "width 0.2s ease-out",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
