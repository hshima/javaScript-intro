class Math {
    sum = function sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 0);
    };

    multiply = function multiply(a, b) {
        return a * b;
    }

    printSome(req, res, a, b) {
        res.load('index', a + b);
    }
}
module.exports = Math;