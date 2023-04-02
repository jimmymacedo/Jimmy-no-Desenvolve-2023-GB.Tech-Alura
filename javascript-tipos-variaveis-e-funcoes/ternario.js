const idadeMinima = 18;
const idadeCliente =  18;

if (idadeCliente >= idadeMinima) {
    console.log('cerveja');
} else {
    console.log('suco');
}

// ternario

const bebida = idadeCliente >= idadeMinima ? 'cerveja' : 'suco';
console.log(bebida);
