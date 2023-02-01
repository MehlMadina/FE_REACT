import { useState } from "react";
import Calculation from "../Calculation";
import BasketItem from "../BasketItem";


function App() {

const defaultProducts = [
  {id: 1, title: 'Велосипед', price: 45000, count: 1},
  {id: 2, title: 'Ролики', price: 45000, count: 3},
  {id: 3, title: 'Самокат', price: 45000, count: 3},
  {id: 4, title: 'Скейт', price: 45000, count: 3},
  {id: 5, title: 'Лыжи', price: 45000, count: 3},
];


const increment = (value) => {
  const target = basket.find(({ id }) => id === value);
  target.count++;
  setBasket([...basket]);
};


const decrement = (value) => {
  const target = basket.find(({ id }) => id === value);
  target.count--;

  if (target.count === 0) {
    setBasket(basket.filter((elem) => elem !== target));
  } else {
    setBasket([...basket]);
  }
};


const [basket, setBasket] = useState(defaultProducts);

  return (
    <div>
      <div>
        {basket.map((item) => (
          <BasketItem
            // increment={increment}
            // decrement={decrement}
            {...{ increment, decrement }}
            key={item.id}
            {...item}
          />
        ))}
      </div>
      <Calculation basket={basket}/>
    </div>
  );
}

export default App;
