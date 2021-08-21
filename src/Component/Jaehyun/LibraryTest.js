import React, { useRef } from "react";
import DaumPostcode from "react-daum-postcode";

const DaumPostLibray = () => {
  const addrInput = useRef("");
  let detailInput = useRef("");
  const zonecodeInput = useRef("");
  const finish = useRef("");

  const handleComplete = (data) => {
    console.log("data", data);
    let fullAddress = data.address;
    let zonecode = data.zonecode;
    addrInput.current.value = fullAddress;
    zonecodeInput.current.value = zonecode;
  };

  const detailAddr = (e) => {
    detailInput.current.value = e.target.value;
  };
  const handleAddress = () => {
    finish.current.value =
      addrInput.current.value + " " + detailInput.current.value;
  };

  return (
    <>
      <DaumPostcode
        onComplete={handleComplete}
        autoClose={true}
        autoResize={true}
      />
      <div style={{ marginTop: "50px", marginLeft: "20px" }}>
        우편번호 :
        <input
          type="text"
          style={{ width: "100px", height: "30px" }}
          ref={zonecodeInput}
        />
      </div>
      <div style={{ marginTop: "50px", marginLeft: "50px" }}>
        주소 :
        <input
          type="text"
          style={{ width: "500px", height: "30px", marginLeft: "30px" }}
          ref={addrInput}
        />
        <div style={{ marginTop: "20px" }}>
          상세주소 :
          <input
            type="text"
            style={{ width: "300px", height: "30px" }}
            onChange={detailAddr}
            ref={detailInput}
          />
        </div>
        <div>
          <button onClick={handleAddress}> 입력하기 </button>
        </div>
      </div>
      <div style={{ margin: "200px 0 0 500px" }}>
        <input
          className="fullAddress"
          type="text"
          style={{ width: "500px", height: "30px" }}
          ref={{ finish }}
        />
      </div>
    </>
  );
};

export default DaumPostLibray;
