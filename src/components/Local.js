import React from "react";

const Local = () => {
  return (
    <div>
      <form>
        <label style={{ color: "black" }}>
          from:
          <div>
            <input type="text" placeholder="start typing city" />
          </div>
        </label>

        <img className="vector-icon" alt="" src="/vector-18.svg" />
        <img className="group-child4" alt="" src="/vector-21.svg" />
        <img className="icon" alt="" src="/icon.svg" />
        <img className="icon1" alt="" src="/icon1.svg" />
        <label style={{ color: "black" }}>
          Pick up date:
          <div>
            <input type="text" placeholder="start typing date" />
          </div>
        </label>

        <label style={{ color: "black" }}>
          pickup At:
          <div>
            <input type="text" placeholder="start typing time" />
          </div>
        </label>
        <div>
          <button className="exp-btn">Explore Cabs</button>
        </div>
      </form>
    </div>
  );
};

export default Local;
