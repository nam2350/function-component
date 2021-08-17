import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SignJM from "./Component/Jungmin/Login/SignJM";
import KakaoLogin from "./Component/Jungmin/Login/KakaoLogin";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
`;
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <SignJM />
      <KakaoLogin />
    </div>
  );
};

export default App;
