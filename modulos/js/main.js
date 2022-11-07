import { sum, round } from './number.js'
import Product from './products.js'

let x = sum(5, 8)
console.log(x)
console.log(round(56.85463, 3))

const obj = new Product('Computador', 1800.0, 10)
console.log(obj)
