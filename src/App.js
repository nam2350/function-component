import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Link } from "react-router-dom";
import KakaoLogin from "./Component/Jungmin/Login/KakaoLogin";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Link to="/kakaologin">카카오로그인</Link>
      </Wrapper>
    </>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
