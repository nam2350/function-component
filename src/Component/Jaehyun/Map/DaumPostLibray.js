import React from "react";
import DaumPostcode from "react-daum-postcode";

const DaumPostLibray = () => {
  const handleComplete = (data) => {
    // console.log("주소데이터 : ", data.address);
    // console.log("주소데이터2 : ", data);
    let fullAddress = data.address;
    console.log("검색완료!", fullAddress);
  };

  return (
    <>
      <DaumPostcode
        onComplete={handleComplete}
        autoClose={true}
        autoResize={true}
      />
      <div style={{ marginTop: "50px", marginLeft: "50px" }}>
        주소 :
        <input
          type="text"
          style={{ width: "500px", height: "30px", marginLeft: "30px" }}
          readOnly
        />
      </div>
    </>
  );
};

export default DaumPostLibray;
