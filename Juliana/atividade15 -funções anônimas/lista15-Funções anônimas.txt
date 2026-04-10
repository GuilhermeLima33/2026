let num1 = Number(prompt("Informe um número: "))
let triplo = function(num1){
let conta = num1 * 3
return conta
}
console.log(triplo(num1))

console.log("---------------------------------------------------")

let m1 = Number(prompt("Informe um numero: "))
let m2 = Number(prompt("Informe outro numero: "))
let multiplicar = function (m1,m2){
let conta = m1 * m2
return conta
}
console.log(multiplicar(m1,m2))

console.log("---------------------------------------------------")

let num3 = Number(prompt("Informe um número: "))
let metade = function(num3){
let conta = num3 / 2
return conta
}
console.log(metade(num3))

console.log("---------------------------------------------------")

let num4 = Number(prompt("Informe um número: "))
let sucessor = function(num1){
let conta = num4 + 1
return conta
}
console.log(sucessor(num4))

console.log("---------------------------------------------------")

let m3 = Number(prompt("Informe um numero: "))
let m4 = Number(prompt("Informe outro numero: "))
let maiorNumero = function(m3,m4){
if(m3 > m4){
    return "Número 1 maior"
}else if(m4 > m3){
    return "Número 2 maior"
}else{
 return   "Ambos iguais"
}
}
console.log(maiorNumero(m3,m4))

console.log("---------------------------------------------------")


let n7 = Number(prompt("Digite um número"))
let verificarNumero = function(n7){
    let resultado = n7 > 0? "Positivo" : n7 < 0? "Negativo" : "Zero"
}
console.log(verificarNumero(n7))

console.log("---------------------------------------------------")


let n8 = Number(prompt("Digite um número"))
let parImpar = function(n8){
    if(n8 % 2 == 0){
        return "Par"
    }else{
        return "Impar"
    }
}
console.log(parImpar(n8))

console.log("---------------------------------------------------")

 let nota1 = Number(prompt("Informe a nota 1"))
let nota2 = Number(prompt("Informe a nota 2"))

 let nota3 = Number(prompt("Informe a nota 3"))

let media = function(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3
    return "Média: " + media
}
console.log(media(nota1, nota2, nota3))

console.log("---------------------------------------------------")

let valor = Number(prompt("Digite o valor da compra "))
let calcularDesconto = function(valor){

     valorNovo = valor - (valor * 0.15)

    return "Ganhou 15% de desconto!\n Novo valor à Pagar: " + valorNovo
}
console.log(calcularDesconto(valor))

 console.log("---------------------------------------------------")


let nota4 = Number(prompt("Nota 1: "))
let nota5 = Number(prompt("Nota 2: ")) 
let verificarAprovacao = function(nota4, nota5){
    let media = (nota4 + nota5) / 2
if(media >= 7){
        return "Aprovado"

}else if(media >= 5 && media < 7){
        return "Recuperação"

}else{
        return "Reprovado"

    }
}
console.log(verificarAprovacao(nota4, nota5))