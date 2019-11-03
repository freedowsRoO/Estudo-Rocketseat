//biblioteca axios simplifica a utilização de requisição http
//Como por exemplo, ele já retorna um JSON com os dados, não é necessario dar um JSON.PARSE na response.

axios.get('https://api.github.com/users/freedowsRoO')
.then( function(response) {
    console.log(response);    
})
.catch(function(error){
    console.log(wrror);
})