import React, { useState } from "react";

function Timer(props) {
  let [counter, setCounter] = useState(0);
  let [timerId, setTimerId] = useState(0);

  function 시작() {
    setTimerId(
      (timerId = setInterval(() => {
        setCounter(counter++);
      }, 100))
    );
  }

  function 멈춤() {
    // console.log("bbbbbbbbbbbbbbbbbb");
    // setCounter(counter - 1);
    clearInterval(timerId);
  }

  function 초기화() {
    // console.log("ccccccccccccccccccc");
    setCounter(0);
  }

  return (
    <>
      <div className="container">
        <h2>{props.title ? props.title : "스톱워치"}</h2>
        <hr />
        {/* <div>timerId : {timerId}</div> */}
        <div>Count : {counter}</div>
        <hr />
        <button onClick={시작}>시작</button>
        <button onClick={멈춤}>멈춤</button>
        <button onClick={초기화}>초기화</button>
      </div>
    </>
  );
}

export default Timer;
