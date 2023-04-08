import AllProductsPage from "../../pages/AllProductsPage";
import BasketPage from "../../pages/BasketPage";
import CategoriesPage from "../../pages/CategoriesPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Nav from "../Nav";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/products/all" element={<AllProductsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
