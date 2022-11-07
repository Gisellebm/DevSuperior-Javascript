
### Exemplo prático

![Image](https://raw.githubusercontent.com/devsuperior/curso-nivelamento-javascript/main/img/product.png "Diagrama classe Product")

### Funções Construtoras

Funções construtoras instanciam objetos com uma estrutura pré-definida.

Todos objetos herdam o prototype de Object.

Depois do ES6 (2015), a estrutura dos objetos podem ser definida por classes.

Boa prática: defina propriedades dentro do construtor, e métodos no prototype.

### new

Objetos são instanciados por meio da chamada do construtor com a palavra chave `new`.

### this

A palavra chave `this` é uma referência para o próprio objeto.

Serve para acessar membros (propriedades e funções) do próprio objeto, ou então para referenciar o objeto de uma forma geral.

Mesmo que não haja ambiguidade, é necessário usar o `this` para acessar um membro do objeto.

### propriedade constructor

Maneira prática de se verificar o construtor de um objeto.

### prototype de uma função

É um mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros (Mozilla).

O prototype de um construtor define uma estrutura de membros que são compartilhados pelas instâncias desse construtor. 

https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes