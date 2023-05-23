import React from 'react';
import s from "./style.module.css";

export default function Button({ children, ...props }) {
  return (
    <div>
        <button {...props} className={s.btn}>{children}</button>
    </div>
  )
}
