import { ENETRESET } from "constants";

//const são variaveis que nao podem ser redefinidas são READONLY
const a = 1;

//a const pode apenas sofrer mutações ou seja, quando é um array ou objeto pode ser atribuido
// um novo valor como no exemplo abaixo
const usuario = {nome: 'Diego' };
usuario.nome = 'Cleiton';
console.log(usuario);


//exemplos de LET são variáveis de escopo ou seja servem para todo
//o codigo dentro das chaves e podem ser reatribuidas
function teste(x){
    let y = 2;

    if(x > 5){
        //dentro desse escopo ela pode ser redeclarada normalmente
        let y = 4;
        console.log(x, y);
    }
}

teste(10);