/*3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12*/

const quantidade = 5;
const numeros = [1, 3, 9, 10, 12];
const pares = [];

for (let i = 0; i < quantidade; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}

console.log(`Números Pares: ${pares.join(", ")}`);

// Saída esperada: Números Pares: 10, 12

// Outra solução

const quantidade = 5;
const numeros = [1, 3, 9, 10, 12];
const pares = numeros.filter((num) => num % 2 === 0);

console.log(`Números Pares: ${pares.join(", ")}`);

// Saída esperada: Números Pares: 10, 12
