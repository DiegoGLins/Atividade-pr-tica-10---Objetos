// Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, utilizando o laço for in, mostre o nome e valor de cada
// atributo no console.

let notebook = {
  Processador: 'I7',
  Memória: '16GB',
  Preço: 5000,
  HD: '1TB',
  SSD: '256GB',
};

//Para prop (propriedade) in obj (objeto) faça
for (let prop in notebook) {
  console.log(prop + " = " + notebook[prop]);
}
