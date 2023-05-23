import React from 'react';
import s from "./style.module.css";

export default function Field({ label, direction, ...props}) {

const style = {
    flexDirection: direction
}

  return (
    <label style={style} className={s.field}>
        <p>{label}</p>
        <input {...props} />
    </label>
  )
}
