import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function CategoriesItem({ label }) {

const link = `category/${label}`;

  return (
    <Link to={link} className={s.item}>
      {label}
    </Link>
  );
}
