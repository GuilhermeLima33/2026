// função com retorno
function somar1(n1,n2){
    return n1 +n2
}
console.log(somar1(1,2))
//função anônima
let somar2 = function (n3, n4){
    return n3 + n4
}
console.log(somar2(1,2))
//Arrow Function - Função da seta
let soma3 = (n5, n6) =>{ //=> function
    return n5 + n6
}
console.log(soma3(1,2))
console.log("----------------------------------")
//Peça um número e verifique se é positivo, negativo ou zero
// let classificar = (numero) => {
// if(numero < 0){
//     return "Negativo"

// }else if(numero > 0){
//     return "Positivo"
// }else{
//     return "zero"
// }
// }
// let numero = Number (prompt("Qual o número?"))
// console.log(classificar(numero))

// let imparouPar = (num) => {
//     let aux = num % 2
//     if(aux ==0){
//         return "Par"
//     }else{
//         return "Impar"
//     }
// }
//  let num  = Number(prompt("Qual o número?"))
//  console.log(imparouPar(num))

//  let dobro1 = (n) => {
//     return n * 2
//  }
//  let dobro2 = n => n * 2
//  console.log(dobro1(5))
//  console.log(dobro2(5))
//  console.log("-------------------------------")

 let numero3 = Number(prompt("Informe um número: "))
 let numeroUser = (numero3) => {
 if(numero3 <= 10){
    return numero3 + 3 * 6 - 1
 }else {
    return numero3 / 2 + 3 * 19
 }
 }

console.log(numeroUser(numero3))
