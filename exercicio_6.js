//Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.

function eprimo() {
  let primo = true;
  let num = 7;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primo = false;
    }
  }
  return primo;
}

console.log(eprimo());
