import React from "react";

const OptionForm = ({ ques, options, value, setValue, enabled = false }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h3 className="form-que">{ques}</h3>
      <div className="form-opt-cont">
        {options.map((option, index) => (
          <label key={index} className="form-radio">
            <input
              type="radio"
              name={ques}
              value={option}
              checked={value === option}
              onChange={handleChange}
              disabled={!enabled}
              required
              className="form-radio-input"
            />
            {option}
          </label>
        ))}
      </div>
    </>
  );
};

export default OptionForm;
