import React, { useEffect } from "react";
import axios from "axios";

const NaverLogin = () => {
  useEffect(() => {
    const naverScript = document.createElement("script");
    naverScript.src =
      "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    naverScript.type = "text/javascript";
    document.head.appendChild(naverScript);

    naverScript.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: "5blOgkIHjJNGxAmqca7a",
        callbackUrl: "http://localhost:3000/test",
        callbackHandle: true,
        isPopup: false,
        loginButton: {
          color: "green",
          type: 3,
          height: 50,
        },
      });
      naverLogin.init();
      naverLogin.logout();
      naverLogin.getLoginStatus((status) => {
        if (status) {
          console.log("naver 로그인 상태", naverLogin.user);
          const { id, email } = naverLogin.user;

          const token = localStorage.getItem("com.naver.nid.oauth.state_token");
          axios
            .post("http://10.58.4.228:8000/users/naver", {
              headers: {
                Authorization: token,
              },
            })
            .then((res) => {
              console.log("backend response 값!!", res);
            });
        } else {
          console.log("naver 비 로그인 상태");
        }
      });
    };
  }, []);
  return <div id="naverIdLogin"></div>;
};

export default NaverLogin;
