//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let media = gets(5.5, 8, 2);

if (media < 5) {
  print("REP");
} else if (media < 7) {
  print("REC");
} else if (media > 7) {
  print("APR");
}

// TODO: Criar demais condições para a resolução deste desafio.
