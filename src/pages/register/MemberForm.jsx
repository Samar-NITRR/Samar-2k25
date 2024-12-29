import React, { useEffect } from "react";

const MemberForm = ({ value, setValue, count, enabled = false }) => {
  useEffect(() => {
    if (value.length < count) {
      setValue((prev) => {
        const updatedArray = [...prev];
        while (updatedArray.length < count) {
          updatedArray.push({ name: "", year: null });
        }
        return updatedArray;
      });
    }
  }, [value, count, setValue]);

  const handleInputChange = (index, field, fieldValue) => {
    setValue((prev) => {
      const updatedArray = [...prev];
      updatedArray[index] = { ...updatedArray[index], [field]: fieldValue };
      return updatedArray;
    });
  };

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index}>
          <h3 className="form-que">{`Team Member ${index + 2}`}</h3>
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Name"
              value={value[index]?.name || ""}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
              className="form-input"
              disabled={!enabled}
              required={true}
            />
            <input
              type="number"
              placeholder="Graduation Year"
              value={value[index]?.year || ""}
              onChange={(e) => handleInputChange(index, "year", e.target.value)}
              className="form-input"
              disabled={!enabled}
              required={true}
              max="2028"
              min={new Date().getFullYear()}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MemberForm;
