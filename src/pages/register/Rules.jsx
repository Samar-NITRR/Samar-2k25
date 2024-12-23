import React, { useEffect, useState } from "react";

const Rules = ({ sport }) => {
  const [rules, setRules] = useState([
    "Team should consist of 15 player",
    "The match will be of this much minutes",
    "Blah Blah Blah",
  ]);

  useEffect(() => {
    //Load rules from the server
  }, []);

  return (
    <div className="w-full p-4 flex flex-col justify-center overflow-auto">
      <h2 className="text-lg md:text-xl font-bold text-secondary mb-4">
        {sport.display}
      </h2>
      <h3 className="text-white md:text-lg font-semibold mb-2">
        Rules and Regulations
      </h3>
      <ul className="list-decimal list-inside text-gray-300 space-y-2">
        {sport.rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rules;
