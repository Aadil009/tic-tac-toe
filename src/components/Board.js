import React from "react";
import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "350px",
  height: "350px",
  margin: "0 auto",
  marginTop:'20px',
  display: "grid",
  gridTemplate: "repeat(3,1fr)/ repeat(3,1fr)",
};

export default function Board({ squares, onClick }) {
  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}
