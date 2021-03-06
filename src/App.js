import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Contents>
          <Link to="/kakaologin">카카오로그인</Link>
          <Link to="/postcode">주소검색</Link>
          <Link to="/test">테스트</Link>
        </Contents>
      </Wrapper>
    </>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
`;
