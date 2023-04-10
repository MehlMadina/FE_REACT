import { useDispatch } from "react-redux";
import BasketPage from "../../pages/BasketPage";
import CategoriesPage from "../../pages/CategoriesPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Nav from "../Nav";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";
import { asyncLoadProductsAction } from "../../store/asyncAction/products";
import ProductsPage from "../../pages/ProductsPage";

function App() {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(asyncLoadCategoriesAction)
  dispatch(asyncLoadProductsAction)
}, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/category/:category" element={<ProductsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
