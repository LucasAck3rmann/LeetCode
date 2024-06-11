// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const etanolPrice = 4.5;
const gasolinaPrice = 5.5;
const fuelType = "etanol";
const gastomedio = 8;
const distance = 390;

if (fuelType === "etanol") {
  let total = (distance / gastomedio) * etanolPrice;
  console.log(`O gasto total da viagem é ${total}`);
} else {
  let total = (distance / gastomedio) * gasolinaPrice;
  console.log(`O gasto total da viagem é ${total}`);
}
