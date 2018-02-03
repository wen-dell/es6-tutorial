let usFormatter = new Intl.NumberFormat('en-US');
let brFormatter = new Intl.NumberFormat('pt-BR'); 

console.log(usFormatter.format(10345.24));
console.log(brFormatter.format(10345.24)); // <-- This is wrong...