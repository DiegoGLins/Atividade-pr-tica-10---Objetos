// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let aluno1 = {
    nome: 'Junior',
    nota1: 8,
    nota2: 6 
}

let aluno2 = {
    nome: 'Patrícia',
    nota1: 7,
    nota2: 9
}


let mediaAluno1 = (aluno1.nota1 + aluno1.nota2) / 2
let mediaAluno2 = (aluno2.nota1 + aluno2.nota2) / 2
let mediaTurma = (mediaAluno1 + mediaAluno2) / 2

console.log(aluno1)
console.log(aluno2)
console.log('media:' + mediaAluno1)
console.log('media:' + mediaAluno2)
console.log('media:' + mediaTurma)



