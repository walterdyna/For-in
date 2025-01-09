/* 
Estrutura de Repetição - LOOP
          FOR IN

O for...in no JavaScript é uma estrutura usada para percorrer as chaves (propriedades) de um objeto ou os índices de um array. Ele não acessa diretamente os valores, mas sim os nomes das propriedades ou posições, permitindo que você use esses nomes para acessar os valores correspondentes.

Por exemplo, em um objeto, o for...in percorre cada chave (nome da propriedade). Já em um array, ele passa pelos índices (números que indicam a posição de cada elemento). Embora funcione com arrays, ele é mais adequado para objetos, pois pode incluir propriedades herdadas ou que não fazem parte diretamente do objeto original.

Em resumo, o for...in é útil para explorar a estrutura de um objeto, enquanto o for...of é melhor para trabalhar diretamente com valores.
*/

const user = {name: "Alex", age: 41, occupation: "Developer", country: "Brazil"};

//console.log(user.name) -> Alex
//console.log(user['name']) -> Alex


for (const key in user) {
    console.log(key)//somente a chave
    console.log(key + user[key])
    console.log(`${key} : ${user[key]}`)// chave mais valor
    console.log(key + user[key])
}
