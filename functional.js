var foldl = function (f, acc, array) {
    for (let i = 0; i < array.length; i++) {
        acc = f(acc, array[i]);
    }
    return acc;
};

console.log(foldl(function(x, y) { return x + y; }, 0, [1, 2, 3])); // Output: 6
console.log(foldl(function(acc, x) { return [x].concat(acc); }, [], [1, 2, 3])); // Output: [3,2,1]

var foldr = function (f, acc, array) {
    for (let i = array.length - 1; i >= 0; i--) {
        acc = f(array[i], acc);
    }
    return acc;
};

console.log(foldr(function(x, y) { return x / y; }, 1, [2, 4, 8])); // Output: 2 / (4 / (8 / 1)) = 4
console.log(foldr(function(x, acc) { return [x].concat(acc); }, [], [1, 2, 3])); // Output: [1,2,3]

var map = function (f, array) {
    return foldl(function(acc, x) { return acc.concat(f(x)); }, [], array);
};

console.log(map(function(x) { return x + x; }, [1, 2, 3, 5, 7, 9, 11, 13])); 
// Output: [2, 4, 6, 10, 14, 18, 22, 26]
