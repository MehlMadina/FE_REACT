import React from "react";
import s from "./style.module.css";

export default function User({ name, lastname, age }) {
  return (
    <div className={s.card}>
      <p>{name}</p>
      <p>{lastname}</p>
      <p>{age}</p>
    </div>
  );
}
