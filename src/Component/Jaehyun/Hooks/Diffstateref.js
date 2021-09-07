import React, { useState, useRef, useEffect } from "react";

const Diffstateref = () => {
  const [count1, setCount] = useState(0);
  const count2 = useRef(0);

  const test = () => {
    setCount(count1 + 1);
    console.log("useState", count1);
  };

  const refTest = () => {
    count2.current = count2.current + 1;
    console.log("useRef", count2);
  };

  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ margin: "50px", color: "blue", fontWeight: "bold" }}>
          state 렌더 : {count1}
        </h1>
        <h1 style={{ margin: "50px", color: "red", fontWeight: "bold" }}>
          ref렌더 : {count2.current}
        </h1>
        <button onClick={test} style={{ margin: "20px" }}>
          state 증가
        </button>
        <button style={{ margin: "20px" }} onClick={refTest}>
          ref 증가
        </button>
      </div>
    </div>
  );
};

export default Diffstateref;
