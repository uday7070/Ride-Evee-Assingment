import React, { useState } from "react";
import Singletrip from "./Singletrip";
import Roundtrip from "./Roundtrip";

const Outstation = () => {
  const [temp, setTemp] = useState(5);
  const [singleColor, setSinglecolor] = useState("green");
  const [roundcolor, setRoundcolor] = useState("white");
  const oneHandler = () => {
    setSinglecolor("green");
    setRoundcolor("white");
    setTemp(5);
  };
  const roundHandler = () => {
    setSinglecolor("white");
    setRoundcolor("green");
    setTemp(6);
  };
  return (
    <div>
      <button
        onClick={oneHandler}
        className="out-btn"
        style={{
          marginRight: "15px",
          fontSize: "12px",
          backgroundColor: singleColor,
        }}
      >
        One Way
      </button>
      <button
        onClick={roundHandler}
        className="out-btn"
        style={{ background: roundcolor }}
      >
        Round Trip{" "}
      </button>
      {(() => {
        switch (temp) {
          case 5:
            return <Singletrip />;
          case 6:
            return <Roundtrip />;

          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Outstation;
