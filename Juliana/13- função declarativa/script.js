// //funções declarativas

// let a = 5
// let b = 10
// console.log(a+b)

// let c = 54
// let d = 17
// console.log(c+d)


// function soma(){
//     let num1 = Number(prompt("Qual o primeiro número?"))
//     let num2 = Number(prompt("Qual o segundo número?"))
//     console.log(num1+num2)
// }
// soma() //chamando função

// console.log("-----------------------------------------------------")

// function saudacao (){
//     console.log("Bom dia")
// }
// saudacao()

// console.log("----------------------------------------------------")

// function inicializacao (){
//     let nome = prompt("qual seu nome")
//     console.log("Bem Vindo ao Site", nome)

// }
// inicializacao()

// console.log("----------------------------------------------------")

/*Uma escola solicitou um sistema de aprovação de alunos, crie uma
função , peça duas notas para o usuário, calcule a média e se for
igualou maior a 7, mostre "Aprovado", senão, mostre"Reprovado".
 chame a função duas vezes*/

//  function notas (){
// let notaaluno = Number(prompt("Qual a 1° nota do aluno?"))
// let notaaluno2 = Number(prompt("Qual a 2° nota do aluno?"))
// let mediaNota = (notaaluno + notaaluno2) /2
// if(mediaNota >= 7){
//     console.log("Aprovado")
// }else{
//     console.log("Reprovado")
// }
//  }

// notas()
// notas()

function pontuacao (){
let pontos = Number(prompt("Qual foi sua pontuação?"))
if(pontos >= 3000){
    console.log("Vencedor")
}else if(pontos > 2200){
    console.log("Segundo lugar")
}else if(pontos >= 1800){
    console.log("Terceiro lugar")
}else{
    console.log("Não foi dessa vez")
}
}

pontuacao()