const N = gets(5, 3, 4, 1, 10, 8);
let maiorNumeroPar = 0;
let menorNumeroImpar = Infinity;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 === 0 && numero > maiorNumeroPar) {
    maiorNumeroPar = numero;
  } else if (numero % 2 === 1 && numero < menorNumeroImpar) {
    menorNumeroImpar = numero;
  }
}

if (maiorNumeroPar > 0) {
  print("Maior número par: " + maiorNumeroPar);
} else {
  print("Nenhum número par encontrado.");
}

if (menorNumeroImpar !== Infinity) {
  print("Menor número ímpar: " + menorNumeroImpar);
} else {
  print("Nenhum número ímpar encontrado.");
}
