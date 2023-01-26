import { useState } from "react";
import AddProduct from "../AddProduct";
import Product from "../Product";

function App() {

const defaultProducts = [
  {id: 1, title: 'велосипед', price: 45000},
  {id: 2, title: 'ролики', price: 25000},
  {id: 3, title: 'самокат', price: 15000},
  {id: 4, title: 'скейт', price: 13000},
  {id: 5, title: 'лыжи', price: 27000},
  {id: 6, title: 'коньки', price: 15000},
]

const [products, setProducts] = useState(defaultProducts);

const deleteProduct = (delId) => {
  const newArr = products.filter(({id}) => id !== delId);
  setProducts(newArr);
}

const createProduct = (name, price) => {
  const newProduct = {
    id: Date.now(),
    name,
    price
  }
  const newArr = [...products, newProduct];
  setProducts(newArr);
  
}

  return (
    <div>
      <AddProduct />
      <div>
      {
        products.map((product) => <Product key={product.id} {...product} deleteProduct={deleteProduct}/>)
      }
    </div>
    </div>
    
  );
}

export default App;
