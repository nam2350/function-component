import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import LoginJM from "./Component/Jungmin/Login/LoginJM";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
`;
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <LoginJM />
    </div>
  );
};

export default App;
