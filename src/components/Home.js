import React, { useState } from "react";
import Outstation from "./Outstation";
import Local from "./Local";
import Airport from "./Airport";

const Home = () => {
  const [temp, setTemp] = useState(5);
  const [outcolor, setOutcolor] = useState("green");
  const [localcolor, setLocalcolor] = useState("white");
  const [aircolor, setAircolor] = useState("white");
  const handlerLocal = () => {
    setLocalcolor("green");
    setOutcolor("white");
    setAircolor("white");
    setTemp(6);
  };
  const handlerOut = () => {
    setLocalcolor("white");
    setOutcolor("green");
    setAircolor("white");
    setTemp(5);
  };
  const handlerAir = () => {
    setLocalcolor("white");
    setOutcolor("white");
    setAircolor("green");
    setTemp(7);
  };

  return (
    <div>
      <div className="heading">
        <p className="heading-para">
          ​India's Leading One-Way Inter-City Cab Service Provider
        </p>
        <div className="rectangle">
          <div className="container ">
            <button
              onClick={handlerOut}
              className="btn"
              style={{
                color: "rgb(203, 197, 197)",
                marginRight: "15px",
                backgroundColor: outcolor,
              }}
            >
              Outstation
            </button>
            <button
              onClick={handlerLocal}
              className="btn"
              style={{
                color: "rgb(203, 197, 197)",
                marginRight: "15px",
                backgroundColor: localcolor,
              }}
            >
              Local
            </button>
            <button
              onClick={handlerAir}
              className="btn"
              style={{ color: "rgb(203, 197, 197)", backgroundColor: aircolor }}
            >
              Airport
            </button>
            {(() => {
              switch (temp) {
                case 5:
                  return <Outstation />;
                case 6:
                  return <Local />;
                case 7:
                  return <Airport />;

                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
