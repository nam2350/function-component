import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginJH from "./Component/Jaehyun/LoginJH";
import KakaoLogin from "./Component/Jungmin/Login/KakaoLogin";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/loginjh" component={LoginJH} />
        <Route exact path="/kakaologin" component={KakaoLogin} />
      </Switch>
    </Router>
  );
}

export default Routes;
