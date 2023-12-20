import React, { useEffect, useState } from "react";
import "./guess.css";
import { Link } from "react-router-dom";

function Guess() {
  const [welcome, setWelcome] = useState(true);
  const [page, setPage] = useState("");
  const [multi, setMulti] = useState("");
  const [num, setNum] = useState("");
  const [div, setDiv] = useState("");
  const [sub, setSub] = useState("");
  const [result, setResult] = useState("");
  const [answer, SetAns] = useState("");
  const [randomValue, setRandomValue] = useState(null);

  useEffect(() => {
    const values = [
      8, 16, 50, 64, 80, 100, 200, 500, 10, 30, 20, 6, 40, 110, 22, 33, 44, 66,
      4,
    ];
    const randomIndex = Math.floor(Math.random() * values.length);
    setRandomValue(values[randomIndex]);
    SetAns(randomValue / 2);
  }, [randomValue]);

  //play Again Function
  const Play= ()=>{
    setResult(null)
    setWelcome(true)
  }

  //Result Function
  const final = () => {
    const ans = (
      <>
        <h3 className="hint"> The result is..{answer}</h3>
      </>
    );
    setResult(ans);
    setTimeout(() => {
      setResult(
        <>
          {ans}
         <button onClick={Play} className="start">Play again</button>
          <p><Link to={'Tic'} className="links">Play Tic Tac Toe</Link></p>
        </>
      );
    }, 4000);
    setSub("");
  };

  //Subtract Function
  const subtract = () => {
    const mathi = (
      <div>
        <h3 className="hint">
          Finally, subtract your original number from your current answer
        </h3>
        <p className="example">
          "Using the example, it would be (5 (your number) * 2 + (Given Number))
          / 2 - 5 (your number)"
        </p>
      </div>
    );
    setSub(mathi);
    setTimeout(() => {
      setSub(
        <>
          {mathi}
          <button className="btn" onClick={final}>
            Next
          </button>
        </>
      );
    }, 4000);
    setDiv(null);
  };

  //Divied Function
  const divied = () => {
    const elsa = (
      <div>
        <h3 className="hint">Now, divide your answer by 2..</h3>
        <p className="example">
          "Continuing with the example, it would be (5 (your number) * 2 +
          (Given Number)) / 2"
        </p>
      </div>
    );
    setDiv(elsa);
    setTimeout(function () {
      setDiv(
        <>
          {elsa}
          <button className="btn" onClick={subtract}>
            Next
          </button>
        </>
      );
    }, 4000);
    setNum("");
  };

  // num Function
  const numFun = () => {
    const devil = (
      <div>
        <h3 className="hint">Add the number {randomValue} to your answer...</h3>
        <p className="example">
          "For example, 5(your number)*2+(given number)."
        </p>
      </div>
    );
    setNum(devil);
    setTimeout(function () {
      setNum(
        <>
          {devil}
          <button className="btn" onClick={divied}>
            Next
          </button>
        </>
      );
    }, 4000);
    setMulti("");
  };

  // Multi Function
  const multiple = () => {
    const ghost = (
      <div>
        <h3 className="hint"> Multiply your chosen number by 2.</h3>
        <p className="example">
          "For instance, if I chose 5, it would be 5 (your number) * 2."
        </p>
      </div>
    );
    setMulti(ghost);
    setTimeout(function () {
      setMulti(
        <>
          {ghost}
          <button className="btn" onClick={numFun}>
            Next
          </button>
        </>
      );
    }, 3000);
    setPage("");
  };

  // Start Function
  const start = () => {
    const das = (
      <div>
        <h3 className="hint">
          Choose a favorite number and keep it in your mind..
        </h3>
        <p className="example">" For example, I'll choose the number 5."</p>
      </div>
    );
    setPage(das);
    setTimeout(function () {
      setPage(
        <>
          {das}
          <button className="btn" onClick={multiple}>
            Next
          </button>
        </>
      );
    }, 3000);

    setWelcome(false);
  };

  return (
    <div className="leo">
      <h2 className="head">
        "Let me guess the number you have in your mind.."
      </h2>
      {welcome && (
        <>
        <button onClick={start} className="start">
          Start Game
        </button> <br />
        <Link to={"Tic"} className="links">Play Tic Tac Toe Game</Link>
        </>
      )}
      {page}
      {multi}
      {num}
      {div}
      {sub}
      {result}
    </div>
  );
}

export default Guess;
