const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('First data');
        }, 1000);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        throw new Error("Erro identificado"); //Lança o erro voluntariamente
        setTimeout(function () {
            resolve('Second data');
        }, 1000);
    });

Promise.all([
    doSomethingPromise(),
    doOtherThingPromise()])
    .then(data => {
        console.log(data);
    }).catch(err =>{
        console.log(err); //aplica tratativa de erro
    });