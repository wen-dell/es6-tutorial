let obj = {
    foo: 12,
    ['bar' + quux()]: 11 
};

function quux() {
    return 'xx2';
}

console.log(obj);