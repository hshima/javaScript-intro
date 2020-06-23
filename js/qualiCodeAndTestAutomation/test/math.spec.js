// mocha, chai sinon

/**
 * mocha -> descritivo, segue padrões do BDD. Orientado para escrever os testes de forma expressiva para 
 * descrever o comportamento esperado pelo componente
 * Pode ser utilizado tanto no browser quanto no node.
 * Recomandação do framewrork para não se realizar arrow functions (=>), pois o time limit é de 2000 mili.
 * para se constrolar tempos maiores que 2000 mili, recomenda-se utilizar function, pois é possível alterar
 * a propriedade através do método this.timeout(arg);
 * Não implementa melhorias nos argumentos Assert
 * 
 * chai -> É uma biblioteca que implementa melhorias no assert. Complementa a biblioteca já presente
 * no node.
 * 
 * sinon -> Permite criar mocks e verificar se essas foram invocadas
 * 
 */
const assert = require('assert');
const Math = require('../src/math.js');
const { exception } = require('console');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class', // Argumento sendo testado
    function () { // testes
        // Hooks
        beforeEach(function () { // inicializa uma variável antes de realizar a execução de cada teste
            value = 0;
        })
        it('Sum two numbers', // Descrição do comportamento esperado
            function (done) { // Ao aplicar o argumento done, a asserção será aplicada apenas após a chamado do método done
                const math = new Math();
                this.timeout(3000); // possível apenas ao não se utilizar arrow function
                value = 5;
                math.sum(value, 5, value => {
                    /* método assert, aplicado sem chai
                    //assert.equal(value, 15); // falha
                    assert.equal(value, 10); // sucesso
                    */
                    expect(value, 5).to.equal(10); // Primeira implementação do Chai
                    done(); // Marca o final da execução da asserção (linha 12)
                });
            });
        it('Multiply two numbers',
            function () {
                const math = new Math();

                //assert.equal(math.multiply(value, 5), 0);
                expect(math.multiply(value, 5).to.equal(0));
            }
        );
        //it.only('Divide two numbers'); // Permite executar apenas um teste específico
        it.skip('subtracts two numbers', // Desconsidera um teste específico, implementado ou não
            //implementação
        );
        it('Powers two numbers');  // Permite criar testes sem execução, sendo contabilizado na propriedade pending, de testes
        it('root two numbers',
            function () {
                const obj = {
                    name: 'Name of One'
                };
                expect(obj).to.have.property('name'); // sucess
            });
        it.only('Call req with sum and index values',
            function () {
                const req = {};
                const res = {
                    load: function load(){
                        console.log('Called')
                    }
                };

                sinon.spy(res, 'load');

                const math = new Math();
                math.printSome(req, res, 5, 5);
                //expect(res.load.calledOnce).to.be.true; // Utilizando spy, é possível identificar se foi invocada da maneira correta
                expect(res.load.args[0][0]).to.equal('index');
                expect(res.load.args[0][1]).to.equal(10);
            })
    });