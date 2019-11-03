//Ajax é uma forma de fazer requests no servidor SEM PRECISAR ATUALIZAR A PAGINA




//Promisse é uma classe javascript que processa uma requisiçao em segundo plano SEM TRAVAR a aplicação, ou seja, 
//não precisa esperar um retorno para continuar executando o código.

var minhaPromisse = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/freedowsRoO');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    })
}

minhaPromisse()
.then( function(response) {
    console.log(response);    
})
.catch(function(error){
    console.log(error);
})
