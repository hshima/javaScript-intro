/***
 * 
 * O seguinte exemplo funciona normalmente, mas não prevê tratamento de exceções 
 * */
/*
        function doStg(callback) {
            setTimeout(function () {
                callback("First data");
            }, 1000);
        }

        function doOththing(callback){
            setTimeout(function() {
                callback('Second data');
            }, 1000);
        }

        function doAll(){
            doStg(function(data){
                var processedData = data.split('');

                doOththing(function(data2){
                    var processedData2 = data2.split('')
                    setTimeout(function() {
                        console.log(processedData, processedData2);
                    }, 1000);
                })
            });
        }

        doAll();

*/
/***
 * Antes do padrão ES6, sem a aplicação de nenhuma biblioteca, 
 * a correção seguiria o exemplo a seguir, entretanto, a solução é 
 * verbosa e propensa a falhas de desenvolvimento
 *  */

/*
        function doStg(callback) {
            setTimeout(function () {
                callback("First data");
            }, 1000);
        }

        function doOththing(callback) {
            setTimeout(function () {
                callback('Second data');
            }, 1000);
        }

        function doAll() {
            try {
                doStg(function (data) {
                    try {
                        var processedData = data.split('');
                        doOththing(function (data2) {
                            var processedData2 = data2.split('')
                            try {
                                setTimeout(function () {
                                    console.log(processedData, processedData2);
                                }, 1000);
                            } catch (err) {
                                //Tratativa
                            }
                        })
                    } catch (err) {
                        //Tratativa
                    }
                });
            } catch (err) {
                //tratativa
            }
        }

        doAll();
*/

/**
 * Dessa forma, a seguinte solução permite o desenvolvimento do mesmo código,
 * de forma menos verbosa
 */
const doStgPromise = new Promise((resolve, reject) => {
    //    throw new Error("Stg won't work");
    setTimeout(() => {
        resolve('First Data');
    }, 1000);
})

const doOthPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second Data');
    }, 1000);
})

// Ao invocar a variável de uma promisse será apresentado o resultado, sem a necessidade
// de se invocar a função
/**
 * Promises podem ter os seguintes status
 * Pending - em execução
 * Fulfilled - Executada
 * Reject - Resultado de Erro
 */
/*
console.log(doStgPromise); //Promise { <pending> } o resultado é pending, pois será executada apenas após 1000 mili
*/
console.log(doStgPromise.then(data => console.log(data))); // Executa a Promise e aguarda até a conclusão do período do timeout, executando em seguida
/**
 * result
 * Promise { <pending> }
 * First Data
 */
/**
 * É possível encadear as chamadas, aplicando o método then
 *  */
doStgPromise
    .then(data => { console.log('Processing: '+data); return doOthPromise; })
    .then(data2 => console.log(data2))
    .catch();