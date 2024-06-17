const notas = [];

notas.push(10);
notas.push(8);
notas.push(4);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i] / notas.length;
}
console.log("A média das notas é: " + soma);
