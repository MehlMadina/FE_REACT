import React from 'react';
import s from './style.module.css';

export default function User({ id, first_name, last_name, email, deleteUsers }) {
  return (
    <div className={s.card}>
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{email}</p>
        <button onClick={() => deleteUsers(id)}>Delete</button>
    </div>
  )
}
