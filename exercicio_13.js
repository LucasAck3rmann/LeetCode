//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

let nomes = ["Vitor", "Viviane", "Vanessa", "João", "Maria", "Vivian"];

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i][0] === "V") {
    console.log(nomes[i]);
  }
}
