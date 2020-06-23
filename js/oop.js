/* Herança baseada em protótipos - prototypes */
/* __proto__ */
/* Com base em um Constructor, é criado um Prototype e, com base na variável, é armazenada a referência ao __proto__ */

/* Teste 1 */
'use strict';
/*
const myText = 'Hello Prototype!';
console.log(myText.split('')); //Separa cada char em um array
console.log(myText.__proto__.split); // f split(){[native code]}
console.log(myText.__proto__.split === String.prototype.split); //true
console.log(myText.constructor === String); //true
console.log(typeof (String));
*/
/*  Logo, __proto__ --> prototype --> constructor
    const myText = 'Hello prototype!';
    myText.constructor --> String
    myText.__proto__ --> String.prototype
*/

/* Identificando o construtor de Animal*/

function Animal() { } //Criando a instância
//  Ao criar a instância será criada a seguinte cadeira de apontamento: 
//  f Animal.constructor --> f Function --> Function.prototype.constructor --> f Object(){} --> Object.prototype == null;
console.log(Animal.constructor) // f Function(){[native code]}
/**/

/*
function Animal() {
    this.qtdePatas = 4;
}
const cachorro = new Animal();
console.log(cachorro.qtdePatas); // 4
*/
/* Operador new

    //Exemplo: new Foo(...);

    Passo 1 - Cria um novo objeto, é herdado Foo.prototype
    Passo 4 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado.
    Passo 3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Se não, será retornado o objeto criado no passo 1

    // Exemplo 2:
    function Pessoa(name){
        this.name = name;
    }
    const p = new Pessoa('Nome da Pessoa');

    console.log(p);

*/
/*
console.log('line 55');
console.log(cachorro.__proto__ === Animal.prototype); //true
console.log(Animal.prototype === Function.prototype); //false
console.log(Animal.__proto__ === Function.prototype); //true

console.log(cachorro instanceof Animal); //true
console.log(Animal instanceof Function); //true
console.log(Function instanceof Object); //true
*/

/* A forma abaixo funciona, entretanto, não há herança. Cada vez que cada vez que o objeto é instanciado, a função latir é criada  */
/*
function Animal() {
    this.qtdePatas = 4;
    this.movimentar = function () { }
}
function Cachorro(morde) {
    Animal.call(this, 4);
    this.morde = morde;
    this.latir = function () { console.log('bark!'); }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
console.log(pug);
console.log(pitbull);
*/

/* A seguinte definição aplica a função ao protótipo, permitindo que seja realizada herança de cada elemento */

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function () { }

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function () { console.log('Bark!'); }

const pug = new Cachorro(false);
const pitbul = new Cachorro(true);

console.log(pug);
console.log(pitbul);
console.log(pitbul.latir());




const name = 'Foo';
const lastName = String('Bar');

I   - name.constructor === lastName.constructor
II  - name.prototype === String.prototype
III - lastName.__proto__ === String.prototype
IV  - name.__proto__.split === lastName.__proto__.split


Decorator