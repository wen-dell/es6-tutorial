let map = new Map();

map.set(1, 'Helena');
map.set(2, 'Bruna');
map.set(3, 'Kev');

console.log(map.size);

for (let [key, value] of map.entries()) {
    console.log(key + ' => ' + value);
}