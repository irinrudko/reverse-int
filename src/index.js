module.exports = function reverse(n) {
    return parseFloat(n.toString().split('').reverse().join(''));
}

//solution:
//https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/

// * Math.sign(n) – если нужно сохранить отрицательное значение