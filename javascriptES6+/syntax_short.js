const nome = 'Jefferson';
const idade = 23;

//Normal
const usuario = { 
    nome: nome,
    idade: idade,
    empresa: 'teste'
}
console.log(usuario);

// Short = quando o nome do objeto é igual a variavel pode deixar apenas o nome do objeto
const usuario2 = { 
    nome,
    idade,
    empresa: 'teste'
}
console.log(usuario2);