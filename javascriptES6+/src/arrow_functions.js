const arr = [1, 2, 4, 5, 8, 9];

//comando map permite encontrar um valor dentro de um array
const newArr = arr.map((item, index)  => {
    return item + index;
});
console.log(newArr);

//comando map permite encontrar um valor dentro de um array
const newArr3 = arr.map(item  => {
    return item;
});
console.log(newArr3);

//comando map permite encontrar um valor dentro de um array
const newArr4 = arr.map(item  => item * 2);
console.log(newArr4);

//comando map permite encontrar um valor dentro de um array
const teste = () => 'teste';
console.log(teste());