const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Sao paulo',
        estado: 'SC',
    },
};
//jeito longo e normal
//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;


//jeito facil e com menos codigo
//const { nome, idade, endereco: {cidade, estado} } = usuario;
//console.log(nome);
//console.log(idade);
//console.log(cidade);

//Outro exemplo de desestruturacao
function mostraPessoa({ nome, idade }) {
    console.log(nome, idade);
}
mostraPessoa(usuario);

