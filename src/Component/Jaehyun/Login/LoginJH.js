import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import { InputType } from "./InputType";

const LoginJH = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleInput = ({ target }) => {
    const { name, value } = target;
    if (name === "id") {
      setId(value);
    }
    if (name === "pw") {
      setPw(value);
    }
  };

  const login = (e) => {
    e.preventDefault();
    console.log("id :", id, "pw :", pw);
    // alert("로그인 되었습니다");
  };

  const deleteToken = () => {
    localStorage.removeItem("Kakao_token");
  };
  const resKakao = (res) => {
    console.log("들어옴");
    const data = res;
    console.log(data);
  };

  return (
    <Wrapper>
      <InputContainer onSubmit={login}>
        {InputType.map(({ id, name, type, placeholder }) => {
          return (
            <InputH
              key={id}
              name={name}
              type={type}
              placeholder={placeholder}
              onchange={handleInput}
            />
          );
        })}

        <Button type="submit">로그인</Button>
      </InputContainer>

      <button onClick={deleteToken}>토큰삭제</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-top: 100px;
  border: 1px solid lightgray;
  padding: 50px;
`;
const InputH = styled(Input)`
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 300px;
  height: 30px;
  color: white;
  font-weight: bold;
  background-color: #1790ff;
  border: none;
  outline: none;
`;
export default LoginJH;
