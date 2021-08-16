import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Component/Basic/Input";
import Button from "./Component/Basic/Button";

const LoginJM = () => {
  const [form, setForm] = useState({});
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleInput = (name, value) => {
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Login>
      <InputContainer onSubmit={handleOnSubmit}>
        {inputBox.map(({ name, type, placeholder, id }) => {
          return (
            <InputStyle
              key={id}
              name={name}
              type={type}
              placeholder={placeholder}
              handleInput={handleInput}
            />
          );
        })}
        <Button type="로그인" />
      </InputContainer>
    </Login>
  );
};

const InputStyle = styled(Input)`
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
`;

const inputBox = [
  {
    id: 1,
    name: "email",
    type: "text",
    placeholder: "사용자 이메일",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "비밀번호",
  },
];

export default LoginJM;
