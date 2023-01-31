import { useState, useEffect } from "react";
import AddProduct from "../AddProduct";
import Product from "../Product";

function App() {

//  useEffect(() => {
//   fetch('https://fakestoreapi.com/products')
//     .then(resp => resp.json())
//       .then(data => {
//         const newArr = data.map(({id, title, price}) => ({id, title, price}));
//         setProducts(newArr);
//       });
//  }, []);



useEffect(() => {
  (async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    const newArr = data.map(({ id, title, price }) => ({ id, title, price }));
    setProducts(newArr);
  })();

}, []);
 


  const [products, setProducts] = useState([]);



const deleteProduct = async (delId) => {
  try {
    const resp = await fetch(`https://fakestoreapi.com/products/${delId}`, {
      method: "DELETE",
    });
    const { id } = await resp.json();

    const newArr = products.filter((product) => product.id !== id);
    setProducts(newArr);
  } catch {
    console.log("Что-то пошло не так");
  }
};



  // const createProduct = (title, price) => {
  //   fetch("https://fakestoreapi.com/products", {
  //     method: "POST",
  //     body: JSON.stringify({ title, price }),
  //   })
  //     .then((res) => res.json())
  //     .then(({ id }) => setProducts([...products, { id, title, price }]));
  // };



  const createProduct = async (title, price) => {
    price = +price.toFixed(2);
    const resp = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({ title, price })
    });
    const { id } = await resp.json();
    setProducts([...products, { id, title, price }]);
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
    target.price = +target.price.toFixed(2);
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
