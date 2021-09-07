// import React, { useEffect } from "react";
// // import styled from "styled-components";
// // import Button from "../Component/Basic/Button";

// const KakaoLogin = () => {
//   const { Kakao } = window;
//   // const [Login, setLogin] = useState();
//   const handlelogout = () => {
//     console.log("로그아웃 버튼을 눌러써!");
//     Kakao.API.request({
//       url: "/v1/user/unlink",
//       success: function (response) {
//         console.log("성공", response);
//       },
//       fail: function (error) {
//         console.log(error);
//       },
//     });
//   };

//   const handlelogin = () => {
//     Kakao.Auth.login({
//       scope: "profile_nickname, account_email",
//       success: function (response) {
//         console.log(response);
//       },
//       fail: function (error) {
//         alert("로그인에 실패했습니다.");
//       },
//     });
//     Kakao.API.request({
//       url: "/v2/user/me",
//       data: {
//         property_keys: ["kakao_account.email", "properties.nickname"],
//       },
//       success: function (response) {
//         console.log(response);
//       },
//       fail: function (error) {
//         alert("로그인에 실패했습니다.");
//       },
//     });
//   };
//   useEffect(() => {
//     if (Kakao.Auth.getAccessToken()) {
//       console.log("어어어");
//     }
//   }, []);

//   return (
//     <>
//       <img
//         name="kakao"
//         onClick={handlelogin}
//         src="/images/kakao_login_medium.png"
//         alt="카카오"
//       ></img>
//       <img
//         name="kakao"
//         onClick={handlelogout}
//         src="/images/kakao_login_medium.png"
//         alt="로그아웃"
//       ></img>
//     </>
//   );
// };

// export default KakaoLogin;
