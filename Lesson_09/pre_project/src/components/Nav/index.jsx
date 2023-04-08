import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

// export default function Nav() {
//   const checkClass = ({ isActive }) => (isActive ? s.active : "");

//   return (
//     <nav className={s.nav}>
//       <NavLink className={checkClass} to="/">
//         Категории
//       </NavLink>
//       <NavLink className={checkClass} to="/products/all">
//         Все товары
//       </NavLink>
//       <NavLink className={checkClass} to="/basket">
//         Корзина
//       </NavLink>
//     </nav>
//   );
// }

export default function Nav() {
  const links = [
    { id: 1, label: "Категории", to: "/" },
    { id: 2, label: "Все товары", to: "/products/all" },
    { id: 13, label: "Корзина", to: "/basket" },
  ];

  const checkClass = ({ isActive }) => isActive ? s.active : "";

  return (
    <nav className={s.nav}>
      {links.map(({ id, label, to }) => (
        <NavLink key={id} to={to} className={checkClass}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
