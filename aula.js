class cachorro {
  nome;
  raca;

  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }

  descreverCachorro() {
    console.log(`O cachorro ${this.nome} é da raça ${this.raca}`);
  }
}
