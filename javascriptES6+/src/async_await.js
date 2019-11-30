const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

//minhaPromise().then(response => ...);

//Metodo de chamada da promise com ASYNC/AWAIT
async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise(); 

///METODO SEM O ASYNC AWATI
/*minhaPromise().then( response => {
    console.log(response);

    minhaPromise().then( response => {
        console.log(response);

        minhaPromise().then( response => {
            console.log(response);        
            
        })         
    })
})*/

//biblioteca axios simplifica a utilização de requisição http
//Como por exemplo, ele já retorna um JSON com os dados, não é necessario dar um JSON.PARSE na response.


 
