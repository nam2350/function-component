import React from 'react'
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
import Counter from './Counter';
import LoginJH from './Component/Jaehyun/LoginJH';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
`
const App = () => {
  

  return (
    <div>
      <GlobalStyle/>
      <LoginJH/>
    </div>
  );
}

export default App