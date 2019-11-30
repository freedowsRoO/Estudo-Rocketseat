// Funão delay aciona o .then após 1s
//const delay = () => new Promise(resolve => setTimeout(resolve('OK') , 1000));
const delay = (cont) => new Promise((resolve, reject) => {
    setTimeout(() => { resolve(cont) }, 2000);
});



//Metodo de chamada da promise com ASYNC/AWAIT
const umPorSegundo = async () => {    
    var cont = 1;
    console.log(await delay(cont++));
    console.log(await delay(cont++));
    console.log(await delay(cont++));
}

/*function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}*/

umPorSegundo();