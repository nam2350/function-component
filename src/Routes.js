import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import LibraryTest from "./Component/Jaehyun/LibraryTest";
import InfiniteScorll from "./Component/Jaehyun/InfiniteScorll";
// import LoginJH from "./Component/Jaehyun/Login/LoginJH";
// import KakaoLogin from "./Component/Jungmin/Login/KakaoLogin";
// import DaumPostLibray from "./Component/Jaehyun/Addr/DaumPostLibray";
import Diffstateref from "./Component/Jaehyun/Hooks/Diffstateref";
import Complete from "./Component/Jaehyun/Complete";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route exact path="/loginjh" component={LoginJH} /> */}
        {/* <Route exact path="/kakaologin" component={KakaoLogin} /> */}
        {/* <Route exact path="/postcode" component={DaumPostLibray} /> */}
        <Route exact path="/complete" component={Complete} />
        <Route exact path="/test" component={LibraryTest} />
        <Route exact path="/test2" component={InfiniteScorll} />
        <Route exact path="/test3" component={Diffstateref} />
      </Switch>
    </Router>
  );
}

export default Routes;
