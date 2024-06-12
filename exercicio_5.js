/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preco = 100;
const condicao = "pix";

const debito = preco - preco * 0.1;
const pix = preco - preco * 0.15;
const parcelado = preco + preco * 0.1;

if (condicao === "debito") {
  console.log(`O valor a ser pago é ${debito}`);
} else if (condicao === "pix") {
  console.log(`O valor a ser pago é ${pix}`);
} else if (condicao === "2x") {
  console.log(`O valor a ser pago é ${preco}`);
} else {
  console.log(`O valor a ser pago é ${parcelado}`);
}
