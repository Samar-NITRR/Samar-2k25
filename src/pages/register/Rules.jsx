import React, { useEffect, useState } from "react";

const Rules = ({ sport }) => {

  return (
    <div className="w-full p-4 flex flex-col justify-center overflow-auto">
      {/* <h2 className="text-lg md:text-xl lg:text-xxl text-rose-500 font-crossFly uppercase font-bold mb-4">
        Samar
      </h2> */}
      <h3 style={{textShadow: "2px 2px 5px black"}} className="text-center text-lg lg:text-2xl text-rose-500 drop-shadow-lg font-crossFly uppercase font-bold mb-4">
        Rules and Regulations
      </h3>
      <ul style={{textShadow: "1px 1px 2px black"}} className="list-disc pl-2 text-gray-300 space-y-6">
        {sport.rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rules;
