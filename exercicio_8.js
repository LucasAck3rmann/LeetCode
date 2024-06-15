/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedio;
  km;
  precoCombustivel;

  constructor(marca, cor, gastoMedio, km, precoCombustivel) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
    this.km = km;
    this.precoCombustivel = precoCombustivel;
  }

  get gastoTotal() {
    return this.km * this.gastoMedio * this.precoCombustivel;
  }

  descrever() {
    console.log(
      `O carro ${this.marca} é da cor ${this.cor} e gasta em média ${this.gastoMedio} litros por km.`
    );
    console.log(
      `O gasto total para percorrer ${this.km} km é de R$ ${this.gastoTotal}.`
    );
  }
}

const fiatUno = new Carro("Fiat", "Vermelho", 0.15, 50, 5.5);

fiatUno.descrever();
