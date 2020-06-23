// mocha, chai sinon

// mocha -> descritivo, segue padrões do BDD. Orientado para escrever os testes de forma expressiva para 
// descrever o comportamento esperado pelo componente
// Pode ser utilizado tanto no browser quanto no node
const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(5,5), 10)
    });
});