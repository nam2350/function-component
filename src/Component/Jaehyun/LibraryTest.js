import React from "react";
import DaumPostcode from "react-daum-postcode";

const LibraryTest = () => {
  const handleComplete = (data) => {
    console.log("주소데이타 : ", data);
    let fullAddress = "";
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
        // console.log("비네임", extraAddress);
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildName}` : data.buildingName;
        // console.log("빌딩네임", extraAddress);
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // console.log("검색완료!", fullAddress);
    // console.log("검색완료!", extraAddress);
  };
  return <DaumPostcode onComplete={handleComplete} />;
};

export default LibraryTest;
