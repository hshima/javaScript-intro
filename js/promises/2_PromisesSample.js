/**
 * Para processar como função, basta que se passe uma arrow function.
 * Assim, os parametros de tempo serão executados
 */
const doStgPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('First Data');
        }, 1000);
    })

const doOthPromise = () =>
    new Promise((resolve, reject) => {
        throw new Error('Error!!'); //Exemplo de erro
        setTimeout(() => {
            resolve('Second Data');
        }, 1000);
    })

doStgPromise()
    .then(data => {
        console.log('Processing: ' + data);
        return doOthPromise();
    })
    .then(data2 => console.log(data2))
    .catch(err => console.log(err)); // captura erro em qualquer momento das funções