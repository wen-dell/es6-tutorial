let brFormatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(brFormatter.format(100200300.40));