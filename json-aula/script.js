const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;
// parse -> transforma uma string em números
const obj = JSON.parse(txt);

console.log(txt.name);

console.log(obj.nome);
// transforma um número em uma string
const text = JSON.stringify(obj);