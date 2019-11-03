//Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
//segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
//idade o resultado deve cair no .then, caso contrário, no .catch

function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade > 18) {
            resolve('maior que 18');
        } else {
            reject('erro');
        }
    })
};

checaIdade(20)
    .then(function (resolve) {
        console.log("Maior que 18");
    })
    .catch(function (error) {
        console.log("Menor que 18");
    });



//Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
//nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
//URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
//URL de exemplo: https://api.github.com/users/diego3g/repos
//Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo

var inputElement = document.querySelector("div#app input[name=user]");
var buttonElement = document.getElementById("btnAddTarefa");
var ulElement = document.querySelector('ul');

buttonElement.onclick = async function () {
    
    var inputText = inputElement.value;
    var url = 'https://api.github.com/users/' + inputText + '/repos';
    const response = await axios.get(url)
        .then(function (response) {
            ulElement.innerHTML = '';
            for (repo of response.data) {
                var liElement = document.createElement('li');
                var liText = document.createTextNode(repo.name);
                liElement.appendChild(liText);
                ulElement.appendChild(liElement);
            }
            console.log(response);
        })
        .catch(function (error) {
            if (error.response.status === 404) {
                alert('Usário não encontrado!')
            }
        })
}


//A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
//da lista apenas enquanto a requisição estiver acontecendo:
//<li>Carregando...</li>
//Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
//Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    console.log('carregando');
    var liElement = document.createElement('li');
    var liText = document.createTextNode('carregando');
    liElement.appendChild(liText);
    ulElement.appendChild(liElement);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});