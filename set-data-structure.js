let set = new Set();
set.add('hello');
set.add('ok');
set.add('hello');

console.log(set.size);

console.log(set.has('ok'));

set.delete('hello');

console.log(set.size);

for (let s of set.values()) {
    console.log(s);
}