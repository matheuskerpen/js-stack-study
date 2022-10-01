const array = [
    {name: 'iPhone', price: 5000, quantity: 2},
    {name: 'MacBook Pro', price: 20000, quantity: 1},
    {name: 'Magic Mouse', price: 1000, quantity: 5},
];

// find retorna somente 1 elemento. O primeiro que a condição retornar true
const find = array.find((item) => {
    return item.price > 1000;
});
console.log({find})

// find retorna o index somente do primeiro elemento que a condição retornar true
// const findIndex = array.findIndex((item) => {
//     return item.name === 'Magic Mouse';
// });
// console.log({findIndex});
// console.log('Produto: ', array[findIndex]);

// const some = array.some((item) => {
//     return item.price < 1000
// });
// console.log({some});

// const every = array.every((item) => {
//     return item.price >= 1000
// });
// console.log({every});

// const map = array.map((item) => {
//     return {
//         ...item,
//         subtotal: item.price * item.quantity
//     }
// });
// console.log({map})

// const filter = array.filter((item) => {
//     return item.quantity > 1
// })
// console.log({filter})