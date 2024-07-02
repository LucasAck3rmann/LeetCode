let media = gets(5.5, 8, 2);

if (media < 5) {
  print("REP");
} else if (media < 7) {
  print("REC");
} else if (media > 7) {
  print("APR");
}

function gets(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function print(result) {
  console.log(result);
}

// Entrada: 5.5, 8, 2

// Saída: REC

// Entrada: 7, 7, 7

// Saída: APR

// Entrada: 2, 2, 2

// Saída: REP
