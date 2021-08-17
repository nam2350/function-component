import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Button from "../Component/Basic/Button";

const KakaoLogin = () => {
  const { Kakao } = window;
  // const [Login, setLogin] = useState();

  const handlelogin = () => {
    Kakao.Auth.login({
      scope: "profile_nickname, account_email",
      success: function (response) {
        console.log(response);
        // fetch(`{우리 패치 유알엘}`, {
        //   ,
        //   method: "POST",
        //   headers: {
        //     Authorization: response.access_token,
        //   },
        // })
        //   .then((res) => res.json())
        //   .then((res) => {
        //     if (res) {

        //       console.log(res);
        //     }
        //   });
      },
      fail: function (error) {
        alert("로그인에 실패했습니다.");
      },
    });
    Kakao.API.request({
      url: "/v2/user/me",
      data: {
        property_keys: ["kakao_account.email", "properties.nickname"],
      },
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        alert("로그인에 실패했습니다.");
      },
    });
  };
  useEffect(() => {
    if (Kakao.Auth.getAccessToken()) {
      console.log("어어어");
    }
  }, []);

  return (
    <img
      name="kakao"
      onClick={handlelogin}
      src="/images/kakao_login_medium.png"
    ></img>
  );
};

export default KakaoLogin;
