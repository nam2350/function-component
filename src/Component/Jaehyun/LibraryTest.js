import React, { useState, useEffect } from "react";
// import NaverLogin from "react-naver-login";
import KakaoLogin from "react-kakao-login";
import NaverLogin from "./NaverLogin/NaverLogin";
import axios from "axios";

const LibraryTest = () => {
  useEffect(() => {
    // console.log(
    //   "현재토큰 네이버",
    //   localStorage.getItem("com.naver.nid.oauth.state_token")
    // );
  }, []);
  const _clickSnsLoginKakao = (e) => {
    const data = e.response;
    let kakaoid = e.profile.id; // 카카오에서 제공한 ID
    // console.log("로그인된 카카오 아이디", e);
    console.log("로그인된 카카오 토큰", data.access_token);
    // const headers = { Autorization: data.access_token };
    axios
      .post("http://10.58.4.228:8000/users/kakao", {
        headers: {
          Authorization: data.access_token,
        },
      })
      .then((res) => {
        console.log("backend response 값!!", res);
      });
  };
  // const _clickSnsLoginNaver = (e) => {
  //   let naverid = e.id; // 네이버에서 제공한 ID
  //   console.log("로그인된 네이버 아이디", e);

  //   axios
  //     .post("http://10.58.4.228:8000/users/naver", {
  //       headers: {
  //         Autorization: localStorage.getItem("com.naver.nid.oauth.state_token"),
  //       },
  //     })
  //     .then((res) => console.log("backend response 값!!", res));
  // };

  return (
    <div>
      {/* <NaverLogin
        clientId={"5blOgkIHjJNGxAmqca7a"}
        callbackUrl="http://localhost:3000/test"
        render={(renderProps) => (
          <div
            id="naverIdLogin"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          ></div>
        )}
        onSuccess={(e) => _clickSnsLoginNaver(e)}
        onFailure={(result) => console.error(result)}
        onClick={_clickSnsLoginNaver}
      /> */}
      <NaverLogin />
      <br />
      <br />
      <br />
      <KakaoLogin
        token={"18887ba3ce1940d9352948b871d3df51"}
        render={(renderProps) => (
          <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <button>카카오 로그인</button>
          </div>
        )}
        onSuccess={(e) => _clickSnsLoginKakao(e)}
        onFail={console.error}
        onLogout={console.info}
      />
    </div>
  );
};

export default LibraryTest;
