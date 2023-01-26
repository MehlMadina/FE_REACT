import { useState } from "react";
import AddProduct from "../AddProduct";
import Product from "../Product";

function App() {
  const defaultProducts = [
    { id: 1, title: "велосипед", price: 45000 },
    { id: 2, title: "ролики", price: 25000 },
    { id: 3, title: "самокат", price: 3000 },
    { id: 4, title: "скейт", price: 13000 },
    { id: 5, title: "лыжи", price: 27000 },
    { id: 6, title: "коньки", price: 15000 },
  ];

  const [products, setProducts] = useState(defaultProducts);


  const deleteProduct = (delId) => {
    const newArr = products.filter(({ id }) => id !== delId);
    setProducts(newArr);
  };



  const createProduct = (title, price) => {
    const newProduct = {
      id: Date.now(),
      title,
      price,
    };
    const newArr = [...products, newProduct];
    setProducts(newArr);
  };



  // const changePrice = (id, num) => {
  //   const newArr = products.map((product) => {
  //     // if (product.id === id) {
  //     //   product.price += num;
  //     // }

  //     product.price = product.id === id ? product.price + num : product.price;
  //     return product;
  //   });
  //   setProducts(newArr);
  // };


  const changePrice = (changeId, value) => {
    const target = products.find(({id}) => id === changeId);

    if (target.price + value < 0) {
      target.price = 0;
    } else {
      target.price += value;
    }
    setProducts([...products]);
  }


  return (
    <div>
      <AddProduct createProduct={createProduct} />
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            deleteProduct={deleteProduct}
            changePrice={changePrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
