import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import CategoriesItem from "../../components/CategoriesItem";

export default function CategoriesPage() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className={s.page}>
        <h1>Лучший магазин лучших вещей</h1>
      <div className={s.categories_container}>
        {categories.map((el) => (
          <CategoriesItem key={el} label={el} />
        ))}
      </div>
    </div>
  );
}
