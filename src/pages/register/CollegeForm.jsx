import React, { useEffect, useState } from "react";

const CollegeForm = ({ value, setValue }) => {
  const [selectedOpt, setSelectedOpt] = useState();

  useEffect(() => {
    if (value == "NIT Raipur") setSelectedOpt(0);
    else if (value != "") setSelectedOpt(1);
  }, []);

  const handleOptionChange = (e) => {
    const selectedCollege = e.target.value;
    if (e.target.value == "Other") {
      setSelectedOpt(1);
      setValue("");
    } else {
      setValue(selectedCollege);
      setSelectedOpt(0);
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h3 className="form-que">Your College</h3>
      <div className="form-opt-cont">
        <label className="form-radio">
          <input
            type="radio"
            name="college"
            value="NIT Raipur"
            checked={selectedOpt == 0}
            onChange={handleOptionChange}
            className="form-radio-input"
            required={true}
          />
          NIT Raipur
        </label>
        <label className="form-radio">
          <input
            type="radio"
            name="college"
            value="Other"
            className="form-radio-input"
            checked={selectedOpt == 1}
            onChange={handleOptionChange}
            required={true}
          />
          Other
        </label>
      </div>
      {selectedOpt == 1 && (
        <div>
          <h3 className="form-que">Enter College Name:</h3>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter your college"
            className="form-input"
            required
          />
        </div>
      )}
    </>
  );
};

export default CollegeForm;
