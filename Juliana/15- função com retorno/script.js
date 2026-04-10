// Declarativa
function soma(){
    let num1 = 2
    let num2 = 5
    let soma = num1 + num2
    console.log(soma)
}
soma()
console.log("====================")
//com Prametro
function soma2(num3, num4){
    let soma2 = num3 + num4
    console.log(soma2)
}
num3 = 2
num4 = 5
soma2(num3,num4)

//com retorno
function soma3 (num5, num6){
    let somar3 = num5 + num6
    return somar3
}
let num5 = 2
let num6 = 5
let resultado = soma3(num5, num6)
console.log(resultado)

//dobro
// function dobro (numero){
// let aux = numero * 2
// return aux //console.log(aux)
// }
// let numero = Number(prompt("Escolha um número"))
// let mostrar = dobro (numero)
// console.log(mostrar)

// function aprovado (nota1, nota2){
//     let media = (nota1 + nota2) /2 
//     if(media >= 7){
//         return "Aprovado"
//     }else{
//         return "Reprovado"
//     }
// }
// let nota1 = Number(prompt("Nota 1: "))
// let nota2 = Number(prompt("nota2: "))
// let resultado1 = aprovado (nota1,nota2)
// console.log(resultado1)

// Maior número 
// function maior(n1, n2){
//     if(n1 > n2){
//         return n1 + "é maior que", n2
//     }else if(n2 < n1){
//         return n2 + "é maior que", n1
//     }else{
//         return "São iguais"
//     }
// }
// let n1 = Number(prompt("Digite um número: "))
// let n2 = Number(prompt("Digite outro número: "))
// let resultado2 = maior(n1,n2)
// console.log(resultado2)

// let n5 = Number(prompt("Informe um número: "))
// function triplo (n5){
// let triplo = n5 * 3
// return triplo
// }
// let resultado3 = triplo(n5)
// console.log(resultado3)

let palavra = prompt("Informe uma palavra: ")
function comptcaoPlavra (palavra){
if (palavra.length > 10){
    return "Uau"
}else{
return "Tem palavras maiores"
}
}
let letras = comptcaoPlavra (palavra)
console.log(letras)


