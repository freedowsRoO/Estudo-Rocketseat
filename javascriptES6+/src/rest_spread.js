//REST
//Serve para pegar o "resto" das propriedades
const usuario = {
    nome: 'Jefferson',
    idade: '30',
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;
console.log(nome);  //retorna so o nome
console.log(resto); //retorna todo o resto do objeto (idade e empresa)

//Exemplo com array
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

//exemplo com parametros de function
function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 4));


//SPREAD
//Faz o papel de propagar/repassar as infors de um objeto/array para outra estrutura de dados
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

const usuario1 = {
    nome: 'jefferson',
    idade: 23,
    empresa: 'teste'
};
const usaurio2 = {...usuario1, nome: 'Gabriel'};
console.log(usaurio2);