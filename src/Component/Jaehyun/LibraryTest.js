import React from "react";
import DaumPostcode from "react-daum-postcode";

const LibraryTest = () => {
  const handleComplete = (data) => {
    let fullAddress = data.fullAddress;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress);
  };
  return <DaumPostcode onComplete={handleComplete} />;
};

export default LibraryTest;
