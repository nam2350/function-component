import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const InputContainer = ({
  inputInfo,
  buttonInfo,
  handleInput,
  handleOnSubmit,
  disabled,
}) => {
  return (
    <InputBox>
      {inputInfo.map(({ name, type, placeholder }) => {
        return (
          <InputStyle
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            handleInput={handleInput}
          />
        );
      })}

      {buttonInfo.map(({ name }) => {
        return (
          <ButtonStyle
            key={name}
            name={name}
            handleOnSubmit={handleOnSubmit}
            disabled={name === "회원가입" ? false : disabled}
          />
        );
      })}
    </InputBox>
  );
};

const InputStyle = styled(Input)`
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
`;

const ButtonStyle = styled(Button)`
  margin: 10px;
  width: 100%;
`;

const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  width: 200px;
`;

export default InputContainer;
