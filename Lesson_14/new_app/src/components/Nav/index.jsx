import React, { useRef } from 'react';
import s from "./style.module.css";

export default function Nav () {

const links = useRef();
const navBtnHandler = () => {
    links.current.classList.toggle(s.nav_open);
}

  return (
    <nav className={s.nav}>
        <a href="">LOGO</a>
        <div ref={links} className={s.links}>
            <a href="">О нас</a>
            <a href="">Товары</a>
            <a href="">Услуги</a>
            <a href="">Контакты</a>
        </div>
        <button onClick={navBtnHandler} className={s.nav_btn}>=</button>
    </nav>
  )
}
