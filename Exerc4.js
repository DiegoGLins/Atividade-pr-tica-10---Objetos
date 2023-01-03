// // Crie cinco objetos JavaScript dentro de um Array contendo
// // nome(texto), idade(número), skills (array), ou seja um total de cincoalunos. Agora crie uma função que receba estes cinco objetos e
// // mais um parâmetro skill. Dependendo da skill enviada mostrar no
// // console.log(), quais alunos têm a skill enviada por parâmetro,
// // mostrar todo o objeto.
// // Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
// // chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
// // Pedro e qual mais se encaixa nessa skill.

let alunos = [
  {
    nome: "Joice",
    idade: 33,
    skills: ["html", "css", "javascript", "c++"],
  },
  {
    nome: "Aline",
    idade: 29,
    skills: ["c#", "phyton", "nodejs", "vuejs"],
  },
  {
    nome: "Guilherme",
    idade: 26,
    skills: ["javascript", "java", "php", "typescript"],
  },
  { nome: "João", idade: 25, skills: ["html", "css", "javascript"] },
  {
    nome: "Pedro",
    idade: 20,
    skills: ["java", "c", "phyton"],
  },
];

function encontraAluno() {
  let skillFound = prompt("Digite a skill para encontrar o aluno:").toLowerCase();

if(!skillFound){
  return alert ('Por favor digite um valor válido !')
} 

  let result = alunos.filter((alunos) => {
    return alunos.skills.find((e, i, a) => {
      if (e == skillFound) {
        return true;
      }
    });
  });

  console.log(result);
}

encontraAluno();
