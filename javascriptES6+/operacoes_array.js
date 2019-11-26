const arr = [1, 2, 4, 5, 8, 9];

//comando map permite encontrar um valor dentro de um array
const newArr = arr.map(function (item, index) {
    return item + index;
});
console.log(newArr);

//comando reduce percorre todo o vetor 
const sum = arr.reduce(function (total, next) {
    return total + next;
});
console.log(sum);

//comando filter, percorre o vetor em busca de valores verdadeiros ou falsos
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

//comando para buscar um valor dentro do array
const find = arr.find(function(item){
    return item == 3;
});
console.log(find);