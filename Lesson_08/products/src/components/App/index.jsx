import AddProductPage from "../../pages/AddProductPage";
import BasketPage from "../../pages/BasketPage";
import ProductsPage from "../../pages/ProductsPage";
import { Routes, Route } from "react-router-dom";
import Nav from "../Nav";
import AboutPage from "../../pages/AboutPage";
import NotFoundPage from "../../pages/NotFoundPage";
import TestPage from "../../pages/TestPage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<AddProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about/:name" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/test/:id" element={<TestPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
