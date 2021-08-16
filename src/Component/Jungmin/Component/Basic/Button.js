import React from "react";

const Button = ({ type, className }) => {
  return <button className={className}>{type}</button>;
};

export default Button;
