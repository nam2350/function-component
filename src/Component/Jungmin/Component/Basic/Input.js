import React from "react";

const Input = ({ name, type, placeholder, handleInput, className }) => {
  const handle = (e) => {
    const { name, value } = e.target;
    handleInput(name, value);
  };

  return (
    <input
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handle}
    ></input>
  );
};

export default Input;
