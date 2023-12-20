import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./tic.css";

function Tic() {
  const [char, setChar] = useState("X");
  const [count, setCount] = useState(1);
  const [winner, setWinner] = useState("");
  const [arrVal, setArrVal] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const checkWinner = () => {
    if (
      arrVal[0][0] &&
      arrVal[0][0] === arrVal[0][1] &&
      arrVal[0][1] === arrVal[0][2]
    ) {
      setWinner(arrVal[0][0] + " is the Winner");
    }
    if (
      arrVal[1][0] &&
      arrVal[1][0] === arrVal[1][1] &&
      arrVal[1][1] === arrVal[1][2]
    ) {
      setWinner(arrVal[1][0] + " is the Winner");
    }
    if (
      arrVal[2][0] &&
      arrVal[2][0] === arrVal[2][1] &&
      arrVal[2][1] === arrVal[2][2]
    ) {
      setWinner(arrVal[2][0] + " is the Winner");
    }
    if (
      arrVal[0][0] &&
      arrVal[0][0] === arrVal[1][0] &&
      arrVal[1][0] === arrVal[2][0]
    ) {
      setWinner(arrVal[0][0] + " is the Winner");
    }
    if (
      arrVal[0][1] &&
      arrVal[0][1] === arrVal[1][1] &&
      arrVal[1][1] === arrVal[2][1]
    ) {
      setWinner(arrVal[0][1] + " is the Winner");
    }
    if (
      arrVal[0][2] &&
      arrVal[0][2] === arrVal[1][2] &&
      arrVal[1][2] === arrVal[2][2]
    ) {
      setWinner(arrVal[0][2] + " is the Winner");
    }
    if (
      arrVal[0][0] &&
      arrVal[0][0] === arrVal[1][1] &&
      arrVal[1][1] === arrVal[2][2]
    ) {
      setWinner(arrVal[0][0] + " is the Winner");
    }
    if (
      arrVal[0][2] &&
      arrVal[0][2] === arrVal[1][1] &&
      arrVal[1][1] === arrVal[2][0]
    ) {
      setWinner(arrVal[0][2] + " is the Winner");
    }
    if (count === 9) {
      setWinner("The Match has Drawn");
    }
  };

  const handleClick = (r, c) => {
    if (arrVal[r][c]) return;
    const tmpArr = [...arrVal];
    tmpArr[r][c] = char;
    setArrVal(tmpArr);
    setChar(char === "X" ? "O" : "X");
    setCount(count + 1);
    checkWinner();
  };

  return (
    <div className="tic">
      <div className="title">Tic Tac Toe</div>
      {!winner && <p className="para">{char} Turn Now</p>}
      <div className="board">
        <div className="gameboard">
          {winner ||
            arrVal.map((row, rIndex) => (
              <div className="row" key={rIndex}>
                {row.map((cell, cIndex) => (
                  <div
                    className="cell"
                    key={cIndex}
                    onClick={() => handleClick(rIndex, cIndex)}
                  >
                    {arrVal[rIndex][cIndex]}
                  </div>
                ))}
              </div>
            ))}
          <button
            onClick={() => {
              setWinner("");
              setArrVal([
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
              ]);
            }}
            className="btn"
          >
            Restart Game
          </button> <br /> 
          <Link to={"/"} className="links">Play Math Magic </Link>
        </div>
      </div>
    </div>
  );
}

export default Tic;
