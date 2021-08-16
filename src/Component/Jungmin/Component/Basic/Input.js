import React from "react";
import styled from "styled-components";

const Input = ({ name, type, placeholder, handleInput }) => {
  const handle = (e) => {
    const { name, value } = e.target;

    handleInput(name, value);
  };

  return (
    <InputStyle
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handle}
    />
  );
};

export default Input;

const InputStyle = styled.input`
  padding: 10px;
  margin: 10px;
`;
