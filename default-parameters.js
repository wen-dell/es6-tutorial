function printGreeting(number = 1, name = 'John') {
    for (let i = 0; i < number; i++) {
        console.log('Hello ' + name);
    }
}

printGreeting();
console.log('\n');
printGreeting(10, 'Mary');