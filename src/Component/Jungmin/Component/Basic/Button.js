import React from "react";

const Button = ({ name, className, disabled, handleOnSubmit }) => {
  return (
    <button
      name={name}
      className={className}
      onClick={handleOnSubmit}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
