import React from "react";

const InputForm = ({ ques, value, setValue, enabled = false }) => {
  return (
    <>
      <h3 className="form-que">{ques}</h3>
      <input
        type="text"
        value={value || ""}
        placeholder="Team Name"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="form-input"
        required={true}
        disabled={!enabled}
      />
    </>
  );
};

export default InputForm;
