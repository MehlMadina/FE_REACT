import React, { useRef, useState } from 'react';
import image from "./media/bmw.jpg";
import s from "./style.module.css";

export default function Loupe() {

const loupeRef = useRef();
const zoomRef = useRef();

const mouseMoveHandler = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    loupeRef.current.style.left = offsetX + "px";
    loupeRef.current.style.top = offsetY + "px";

    zoomRef.current.style.backgroundPosition = `-${offsetX * 10}px -${offsetY * 10}px`;

    console.log(offsetX, offsetY);
}

  return (
      <div className={s.container}>
        <img
          onMouseMove={mouseMoveHandler}
          className={s.main_image}
          src={image}
          alt="car"
        />
        <div ref={loupeRef} className={s.loupe}></div>
        <div ref={zoomRef} className={s.zoom_block} style={{backgroundImage: `url(${image})`}}></div>
      </div>
  );
}
