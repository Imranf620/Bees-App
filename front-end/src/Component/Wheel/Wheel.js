import React, { useRef, useState } from "react";
import "../Wheel/Wheel.css";

function Wheel() {
  const wheelRef = useRef(null);
  const innerRef = useRef(null);
  const [value1, setValue1] = useState(Math.ceil(Math.random() * -3600));
  const [value2, setValue2] = useState(Math.ceil(Math.random() * 3600));

  const handleSpin = () => {
    // Update rotation values
    setValue1(value1 + Math.ceil(Math.random() * -3600));
    setValue2(value2 + Math.ceil(Math.random() * 3600));

    // Apply transformation
    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${value1}deg)`;
    }
    if (innerRef.current) {
      innerRef.current.style.transform = `rotate(${value2}deg)`;
    }
  };

  return (
    <>
      <div className="h-[50vh] w-full my-5 flex justify-center items-center">
        <div className="container">
          <div className="spinbtn" onClick={handleSpin}>
            Spin
          </div>
          <div className="wheel" ref={wheelRef}>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <div className="number">
              <b style={{ "--i": 0 }}>5</b>
              <b style={{ "--i": 1 }}>3</b>
              <b style={{ "--i": 2 }}>8</b>
              <b style={{ "--i": 3 }}>9</b>
              <b style={{ "--i": 4 }}>5</b>
              <b style={{ "--i": 5 }}>2</b>
              <b style={{ "--i": 6 }}>1</b>
              <b style={{ "--i": 7 }}>8</b>
            </div>
          </div>
          <div className="wheel inner" ref={innerRef}>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <div className="number">
              <b style={{ "--i": 0 }}>5</b>
              <b style={{ "--i": 1 }}>3</b>
              <b style={{ "--i": 2 }}>8</b>
              <b style={{ "--i": 3 }}>9</b>
              <b style={{ "--i": 4 }}>5</b>
              <b style={{ "--i": 5 }}>2</b>
              <b style={{ "--i": 6 }}>1</b>
              <b style={{ "--i": 7 }}>8</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wheel;
