const products = [
    {
      id: 1,
      title: "велосипед",
      price: 4500,
      discount: 5,
      marks: [4, 3, 3, 5, 3],
    },
    {
      id: 2,
      title: "ролики",
      price: 700,
      discount: 10,
      marks: [5, 5, 4, 5, 3, 4],
    },
    {
      id: 3,
      title: "лыжи",
      price: 1010,
      discount: 7,
      marks: [],
    },
    {
      id: 4,
      title: "самокат",
      price: 740,
      discount: 2,
      marks: [5, 5, 5, 4, 5, 3, 4, 5],
    },
    {
      id: 5,
      title: "сноуборд",
      price: 1700,
      marks: [3, 2, 4],
    },
  ];

  // написать скрипт, который формирует массив из названий товаров (массив из строк)

  const result = products.map(el => el.title);
  console.log(result);

  const res = products.map(({title}) => title);
  console.log(res);



// написать скрипт, который выводит товары (объект со всеми свойствами) дешевле 1000 единиц (без учета скидки)

  const result2 = products.filter(el => el.price < 1000);
  console.log(result2);

  const res2 = products.filter(({price}) => price < 1000);
  console.log(res2);



// написать скрипт, который выводит товары (объект со всеми свойствами) дешевле 1000 единиц (без учета скидки)

  const res3 = products
  .filter(({price}) => price < 1000)
  .map(({title}) => title)
  console.log(res3);



  // написать скрипт, который выводит массив с названием товаров, дешевле 1000 единиц  (с учетом скидки)

  const result4 = products
  .filter(({price, discount}) => (price - price * discount / 100) < 1000)
  .map(({title}) => title);
  console.log(result4);



// написать скрипт, который формирует массив из объектов со свойствами title, price, marks

const result5 = products.map(({title, price, marks}) => ({title, price, marks}));
console.log(result5);



// написать скрипт, который формирует массив из объектов исключив свойство discount, id

const result6 = products.map(({discount, id, ...item}) => item);
console.log(result6);



// написать скрипт, который формирует массив из объектов со всеми свойствами, кроме discount и с ценой уже с учетом скидки

const result7 = products.map(({price, discount, ...item}) => ({
    ...item,
    price: price - price * (discount ?? 0) / 100
}))
console.log(result7);



// сформировать массив с объектами, у которых свойства title, avg_mark (средняя оценка) если оценок нет, то в avg_mark должно быть значение undefined

const result8 = products.map(({ title, marks }) => ({
  title,
  avg_mark:
    +(marks.reduce((a, b) => a + b, 0) / marks.length).toFixed(2) || undefined,
}));

console.log(result8);



// написать скрипт, который выводит в консоль товар (объект с данными товара), у которого максимальная цена

const result9 = products.reduce((a, b) => a.price > b.price ? a : b);
console.log(result9);



// написать скрипт, который выводит максимальную цену товара

const result10 = products.reduce((a, { price }) => a > price ? a : price, 0);
console.log(result10);



// создать скрипт, который формирует из данного массива объект, где в качестве ключа выступает элемент массива, а в качестве значения кол-во его повторений в массиве

const arr = [1, 4, 4, 3, 5, 1, 4, 3, 4, 5, 1, 1];

// {
//     1: 4,
//     4: 4,
//     3: 2,
//     5: 2
// }


const result11 = arr.reduce((acc, item) => {
  if (acc[item]) {
    return {
      ...acc,
      [item]: acc[item] + 1
    }
  } else {
    return {
      ...acc,
      [item]: 1
    }
  }
}, {});

console.log(result11);



const newObj = arr.reduce(
  (acc, item) => ({
    ...acc,
    [item]: acc[item] + 1 || 1,
  }),
  {}
);

console.log(newObj);








const images = [
  { food: ["/images/food.jpg", "/images/food2.jpg", "/images/food3.jpg"] },
  { sport: ["/images/sport1.jpg", "/images/sport2.jpg", "/images/sport3.jpg"] },
  {
    travel: [
      "/images/travel1.jpg",
      "/images/travel2.jpg",
      "/images/travel3.jpg",
    ],
  },
];

const insteadState = [
  {
    id: 1,
    title: "Sed ut perspiciatis unde omnis iste natus",
    section: "Sport",
    username: "MiaXray",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    section: "Travel",
    username: "Martin",
    descr:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    id: 3,
    title: "At vero eos et accusamus",
    section: "Food",
    username: "Tony",
    descr:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
];

// создать новый массив из объектов, где есть все свойства из второго массива и свойство image. У которого значением является случайная картинка из соответствующей категории. Категория определяется по свойству section.


const results = insteadState.map((item) => {
  //находим ключ для картинок и переводим в нижний регистр
  const image_key = item.section.toLowerCase();
  // находим массив с картинками соответствующей категории
  const images_arr = images.find((elem) => elem[image_key])[image_key];
  //находим случайный индекс картиники
  const rand_index = Math.floor(Math.random() * images_arr.length);
  // по индексу достаем картинку
  const image = images_arr[rand_index];
  //формируем итоговый объект и возвращаем его
  return { ...item, image };
});

console.log(results);