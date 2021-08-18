import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import LoginJH from "./Component/Jaehyun/Login/LoginJH";
import KakaoLogin from "./Component/Jungmin/Login/KakaoLogin";
import LibraryTest from "./Component/Jaehyun/LibraryTest";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/loginjh" component={LoginJH} />
        <Route exact path="/kakaologin" component={KakaoLogin} />
        <Route exact path="/postcode" component={LibraryTest} />
      </Switch>
    </Router>
  );
}

export default Routes;
