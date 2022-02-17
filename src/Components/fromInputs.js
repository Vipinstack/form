import React, { useState } from "react";
import "./fromInputs.css";
import 'animate.css';

const FromInputs = (props) => {
  const [focused, setFocused] = useState(false);
  const { id, onChange, errorMessages, label, ...inputProps } = props;

  const handlefocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="fromInputs">
      <label className="mb-2 m-1 text-gray-500 animate__animated animate__fadeInUp">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        className="p-1 rounded-md border-gray-100 outline-black animate__animated animate__fadeInUp"
        onBlur={handlefocus}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span className="error">{errorMessages}</span>
    </div>
  );
};

export default FromInputs;
