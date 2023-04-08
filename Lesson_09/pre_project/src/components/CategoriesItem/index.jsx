import React from 'react';
import s from './style.module.css';

export default function CategoriesItem({label}) {
  return (
    <div className={s.item}>
        <p>{label}</p>
    </div>
  )
}
