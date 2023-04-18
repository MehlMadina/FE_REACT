import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function CustNavLink({label, count, ...item}) {

const checkClass = ({ isActive }) => [isActive ? s.active : "", s.link].join(" ");

  return (
    <NavLink data-count={count} {...item} className={checkClass}>
          {label}
    </NavLink>
  )
}
