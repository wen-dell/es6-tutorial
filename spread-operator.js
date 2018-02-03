let parameters = [1, 'hello', 19.5];

let simpleArray = [1, ...parameters];

console.log(simpleArray);

function doSomething(a, b, ...args) {
    return (a + b) * args.length;
}

console.log(doSomething(1, 2, ...parameters));

let myString = 'I am not a liar';
let myCharacters = [...myString];

console.log(myCharacters);