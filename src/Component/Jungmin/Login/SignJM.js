import styled from "styled-components";
import React, { useState } from "react";
import InputContainer from "../Component/Basic/InputContainer";

const SignJM = () => {
  const [form, setForm] = useState({});
  const [Sign, setSign] = useState(true);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "로그인") {
      console.log(form);
      alert("로그인에 성공");
    } else if (name === "회원가입") {
      setSign(!Sign);
      setForm({});
    } else if (name === "제출") {
      console.log(form);
      setSign(!Sign);
      alert("회원가입에 성공");
      setForm({});
    }
  };
  const { email, password, name } = form;
  let signinDisabled = email && password ? false : true;
  let signupDisabled = email && password && name ? false : true;
  console.log(signinDisabled);
  const handleInput = (name, value) => {
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <Login>
      {Sign && (
        <InputContainer
          inputInfo={signinInput}
          buttonInfo={signinButton}
          handleOnSubmit={handleOnSubmit}
          handleInput={handleInput}
          disabled={signinDisabled}
        />
      )}
      {!Sign && (
        <InputContainer
          inputInfo={signupInput}
          buttonInfo={signupButton}
          handleOnSubmit={handleOnSubmit}
          handleInput={handleInput}
          disabled={signupDisabled}
        />
      )}
    </Login>
  );
};

const Login = styled.div`
  display: flex;
  justify-content: center;
`;

const signinInput = [
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
const signupInput = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "사용자 이름",
  },
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

const signinButton = [
  {
    id: 1,
    name: "로그인",
  },
  {
    id: 1,
    name: "회원가입",
  },
];

const signupButton = [
  {
    id: 1,
    name: "제출",
  },
];

export default SignJM;
