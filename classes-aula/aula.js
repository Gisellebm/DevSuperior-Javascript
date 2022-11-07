/*
         JavaScript - Classes

Classes em JavaScript são um syntactic sugar para funções contrutoras e prototypes.

Isso significa que a classe é apenas uma forma alternativa de se escrever um tipo com propriedades e métodos. Mas internamente a estrutura será a mesma, baseada em prototypes.
*/

class Product {

  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity
  }

  total() {
    return this.price * this.quantity
  }

  add(amount) {
    return this.quantity += amount
  }

  remove(amount) {
    if(this.quantity >= amount) {
      return this.quantity -= amount
    }
  }

  label() {
    return `Dados: ${this.name} - R$ ${Number(this.price.toFixed(2))} - quant. ${this.quantity}`
  }
}

const p1 = new Product('Monitor', 800.0, 10)
const p2 = new Product('Mouse', 50.0, 4)

console.log(p1.label())
console.log(p2.label())

p2.add(5)
p1.remove(3)

console.log(p1.label())
console.log(p2.label())
