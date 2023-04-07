import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {

const checkClass = ({ isActive }) => isActive ? s.active : '';

  return (
    <nav className={s.nav}>
        <NavLink className={checkClass} to='/'> Add products </NavLink>
        <NavLink className={checkClass} to='/products'> Products </NavLink>
        <NavLink className={checkClass} to='/about'> About </NavLink>
        <NavLink className={checkClass} to='/basket'> Basket </NavLink>
    </nav>
  );
}
