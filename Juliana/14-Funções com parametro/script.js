//Funções com Parâmetro

//Declarativa
function saudacao(){
    let nome = prompt("Qual seu nome? ")
    console.log("Bom dia "+nome)
}
// saudacao()

// Declarativa com parâmetro
function saudacao2(nome2){
    console.log("Bom dia ",nome2)
}
// let nome2 = prompt("Qual seu nome? ")
// saudacao2(nome2)

// Somar dois números
function soma(num1, num2){
    let soma = num1 + num2
    console.log("A soma é:",soma)
}
// let num1 = Number(prompt("Informe um número: "))
// let num2 = Number(prompt("Informe outro número: "))

// soma(num1, num2)

function maioridade (idade){
    if(idade>=18){
        console.log("Maior de idade")

    }else{
        console.log("Menor de idade")
    }
}

maioridade(20)
maioridade(10)
maioridade(16)

console.log("---------------------------------")

/*Peça um número para o usuário, crie um função que calcule 
o dobro e mostre o resultado*/

// function dobro (n2){
// let result = n2 * 2
// console.log(result)
// }

// let n2 = Number(prompt("Informe um número:"))
// dobro (n2)

/*Uma empresa solicitou um sistema de aumento para
 funcionários,crie uma função que recebe um salário,
se ele for menor que 2500, de 500 reais de aumento e
 mostre o novo salário, senão apenas mostre sem aumento
*/

// function salario (valorSL){
// if(valorSL < 2500){
// let resultado = valorSL + 500
// console.log("Valor atualizado: "+ resultado)
// }else{
//     console.log("Sem aumento, valor sem alteração: " + valorSL)
// }
// }

// let valorSL = Number(prompt("Informe o salário:"))
// salario (valorSL)

function aluno (nome, idade, curso){
console.log("Nome: " + nome + "\n" + "Idade: "+ idade + "\n" + "Curso: " + curso)
}
let nome = prompt("Qual seu Nome?")
let idade = Number(prompt("Qual sua idade?"))
let curso = prompt("Qual seu curso?")
aluno (nome, idade, curso)


