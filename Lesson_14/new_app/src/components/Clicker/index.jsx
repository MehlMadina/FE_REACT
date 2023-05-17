import React, { useRef } from 'react';


export default function Clicker() {

const count = useRef();
let value = 0;
let fontSize = 16;
const getColor = () => Math.round(Math.random() * 255);

const clickHandler = () => count.current.innerText = ++value;
const fontHandler = () => count.current.style.fontSize = ++fontSize + "px";
// const changeColor = () => count.current.style.color = `rgb(${getColor()}, ${getColor()}, ${getColor()})`; 
const changeColorHEX = 
() => count.current.style.color = `#${getColor().toString(16) + getColor().toString(16) + getColor().toString(16)}`;

  return (
    <div>
      <button onClick={clickHandler}>Click!</button>
      <button onClick={fontHandler}>Font</button>
      <button onClick={changeColorHEX}>Change color</button>
      <p style={{fontSize: fontSize + "px"}} ref={count}>{value}</p>
    </div>
  );
}
