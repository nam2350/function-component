// import React, { useRef, useEffect, useState } from "react";
// import DaumPostcode from "react-daum-postcode";

// const DaumPostLibray = () => {
//   const [inputval, setInputval] = useState({
//     addr: "",
//     zonecode: "",
//     detail: "",
//     input: "",
//     all: "",
//   });

//   // const addrInput = useRef("");
//   // const zonecodeInput = useRef("");
//   // const detailInput = useRef("안녕");
//   // let fullAddrInput = useRef("");

//   useEffect(() => {}, []);

//   const handleComplete = (data) => {
//     let fullAddress = data.address;
//     let zonecode = data.zonecode;
//     setInputval({ addr: fullAddress, zonecode: zonecode });
//   };

//   const handleAddress = (e) => {
//     setInputval((prev) => {
//       return {
//         ...prev,
//         detail: e.target.value,
//         input: inputval.addr + e.target.value,
//       };
//     });

//     if (e.target.id === "submit") {
//       setInputval((prev) => {
//         return { ...prev, all: inputval.input };
//       });
//     }
//   };

//   return (
//     <>
//       <DaumPostcode
//         onComplete={handleComplete}
//         autoClose={true}
//         autoResize={true}
//       />
//       <div style={{ marginTop: "50px", marginLeft: "20px" }}>
//         우편번호 :
//         <input
//           type="text"
//           style={{ width: "100px", height: "30px" }}
//           value={inputval.zonecode}
//         />
//       </div>
//       <div style={{ marginTop: "50px", marginLeft: "50px" }}>
//         주소 :
//         <input
//           type="text"
//           style={{ width: "500px", height: "30px", marginLeft: "30px" }}
//           value={inputval.addr}
//         />
//         <div style={{ marginTop: "20px" }}>
//           상세주소 :
//           <input
//             type="text"
//             style={{ width: "300px", height: "30px" }}
//             value={inputval.detail}
//             onChange={handleAddress}
//           />
//         </div>
//         <div>
//           <button id="submit" onClick={handleAddress}>
//             {" "}
//             입력하기{" "}
//           </button>
//         </div>
//       </div>
//       <div style={{ margin: "200px 0 0 500px" }}>
//         <input
//           type="text"
//           style={{ width: "500px", height: "30px" }}
//           value={inputval.all}
//         />
//       </div>
//       <div>
//         한개 : <input type="file" />
//       </div>
//       <div>
//         여러개 : <input type="file" multiple />
//       </div>
//     </>
//   );
// };

// export default DaumPostLibray;
