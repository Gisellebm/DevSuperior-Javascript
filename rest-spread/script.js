// REST: valores passados com virgula => array
// sejam convertidos em um array
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
  }
  return total;
}

const result1 = sum(2, 3, 10, 5);

console.log(result1);

// Math.max é uma função que recebe os valores
//como vetores de um número e vai retornar o
// maior dos valores
const result2 = Math.max(2, 3, 10, 5);
console.log(result2);

const result3 = Math.max(4, 7, 2);
console.log(result3);

// SPREAD(espalhar): array => transforma um array em valores separados por virgula
//

const myNumbers = [2, 3, 10, 5];
//const result = Math.max(myNumbers); // Nao funciona sem os 3 pontinhos
const result = Math.max(...myNumbers)// vc 
//espalha os números dos vetores aqui dentro, 
//separados por vírgulas
console.log(result)

// SPREAD: objeto => agora ele transforma membros 
//separados por virgula em um objeto

const item = {
  description: "Celular",
  price: 1499.99,
  quantity: 1
};

//para fazer uma cópia vc precisa colocar os 3 
//pontinhos para espalhar os items, por virgula
// para formar um novo objeto, cloneItem{}
const cloneItem = { ...item };

//vc pode tb acrescentar novos membros ao objeto
const cloneItemPlus = { ...item, weigth: 10 };