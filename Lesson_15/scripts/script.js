
// const products = [
//     { id: 1, title: "apple", price: 12 },
//     { id: 2, title: "peach", price: 8 },
//     { id: 3, title: "pineapple", price: 25 },
//     { id: 4, title: "cherry", price: 15 },
//     { id: 5, title: "cucumber", price: 9 },
//     { id: 6, title: "potato", price: 10 },
//     { id: 7, title: "tomato", price: 18 },
//     { id: 8, title: "onions", price: 11 },
//   ];

// const result = products.map(({ title }) => title);
// console.log(result);

// const result = products.map(({ price, ...item}) => ({...item, price: price * 9/4}));
// console.log(result);


const products = [
    {id: 1, title: "велосипед", marks: [{mark: 4}, {mark: 2}, {mark: 2}, {mark: 3}]},
    {id: 2, title: "ролики", marks: [{mark: 4}, {mark: 5}, {mark: 5}, {mark: 3}]},
    {id: 3, title: "самокат", marks: [{mark: 4}, {mark: 5}, {mark: 4}, {mark: 5}]},
    {id: 4, title: "лыжи", marks: [{mark: 4}, {mark: 3}, {mark: 5}, {mark: 4}]},
    {id: 5, title: "коньки", marks: [{mark: 4}, {mark: 2}, {mark: 3}, {mark: 3}]}
]

// сформировать новый массив, где оценки будут представлены в виде массива из чисел.

// const result = products.map(({ marks, ...el}) => ({
//     ...el,
//     marks: marks.map(({ mark }) => mark)
// }));
// console.log(result);



// сформировать массив из объектов со свойствами id, title, avgMark

// const result = products.map(({ marks, ...el}) => ({
//     ...el,
//     avgMark: marks.reduce((acc, { mark }) => acc + mark, 0) / marks.length
// }));
// console.log(result);



// сформировать массив из объектов со свойствами id, title, marks
// где marks это дедуплецированный массив

// const result = products.map(({ marks, ...el}) => ({
//     ...el,
//     marks: marks.reduce((acc, { mark }) => acc.includes(mark) ? acc : [...acc, mark], [])
// }));
// console.log(result);

// const result = products.map(({ marks, ...el}) => ({
//     ...el,
//     marks: [...new Set(marks.map(({ mark }) => mark))]
// }));
// console.log(result);



// [{mark: 4}, {mark: 2}, {mark: 2}, {mark: 3}]

// {
//     4: 1,
//     2: 2,
//     3: 1
// }


// const result = products.map(({ marks, ...el}) => ({
//     ...el,
//     marks: marks.reduce((acc, { mark }) => {
//         acc[mark] = acc[mark] ? acc[mark] + 1 : 1;
//         return acc
//     }, {}) 
// }));
// console.log(result);



// сформировать массив со свойствами id, name, friendsName (массив с именами друзей)

const users = [
    {id: 1, name: "Анатолий", friends: [3, 4]},
    {id: 2, name: "Степан", friends: [1, 3, 4]},
    {id: 3, name: "Иван", friends: [1, 4]},
    {id: 4, name: "Ольга", friends: [1, 3, 5]},
    {id: 5, name: "Кристина", friends: [1, 3]}
]

// const result = users.map(({ friends, ...item}, _, arr) => ({
//     ...item,
//     friendsName: friends.map(f_id => arr.find(({ id }) => id === f_id).name)
// }));
// console.log(result);



// создать массив из объектов, у которых есть свойства 
// id, name, friendsCount (кол-во людей, которые с ним дружат)

const result = users.map(({ friends, ...item}, _, arr) => ({
    ...item,
    friendsName: friends.map(f_id => arr.find(({ id }) => id === f_id).name),
    friendsCount: arr.filter(({friends}) => friends.includes(item.id)).length,
    friendsCount_1: arr.reduce((acc, { friends }) => acc + +friends.includes(item.id), 0),
    friendsCount_2: arr.reduce((acc, { friends }) => friends.includes(item.id) ? acc + 1 : acc, 0)
}));
console.log(result);