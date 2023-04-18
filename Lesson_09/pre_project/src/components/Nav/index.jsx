import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import CustNavLink from "../CustNavLink";

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

  const basket = useSelector(({basket}) => basket);
  const totalCount = basket.reduce((acc, { count }) => acc + count, 0);



  const links = [
    { id: 1, label: "Категории", to: "/" },
    { id: 2, label: "Все товары", to: "/products/all" },
    { id: 3, label: "Корзина", to: "/basket", count: totalCount },
  ];


  return (
    <nav className={s.nav}>
      {
        links.map(({ id, ...item}) => <CustNavLink key={id} {...item}/>)
      }
    </nav>
  )
}
  

