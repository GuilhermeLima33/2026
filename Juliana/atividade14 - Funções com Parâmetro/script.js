let parametro = Number(prompt("Inform um número"))
function dobro (parametro){
let volta = parametro * 2
return volta
}
let aux1 = dobro (parametro)
console.log(aux1)

console.log("------------------------------------------------------")

let soma1 = Number(prompt("Primeiro número:"))
let soma2 = Number(prompt("Segundo número:"))
function somar (soma1, soma2) {
let resultSoma = soma1 + soma2
return resultSoma
}
let aux2 = somar (soma1, soma2)
console.log(aux2)

console.log("------------------------------------------------------")

let quadrado = Number(prompt("Qual a área do quadrado? "))
function areaQuadrado (quadrado){
let mult = quadrado * quadrado
return mult
}
let aux3 = areaQuadrado (quadrado)
console.log(aux3)

console.log("------------------------------------------------------")

let numeroRetorno = Number(prompt("Informe o numero: "))
function antecessor (numeroRetorno){
let sub = numeroRetorno - 1 
return sub
}

let aux4 =  antecessor (numeroRetorno)
console.log(aux4)

console.log("------------------------------------------------------")

let text = prompt("Informe o texto: ")
function tamanhoTexto (text){
return text.length
}

let aux5 = tamanhoTexto(text)
console.log(aux5)

console.log("------------------------------------------------------")

let n1 = Number(prompt("Numero 1"))
let n2 = Number(prompt("Numero 2"))
function maiorNumero (n1 , n2){
if (n1 > n2){
return "Número 1 é maior"
}else if(n2 > n1){
    return "Número 2 é maior"
}else{
    return "Ambos com o mesmo valor"
}
}

let aux6 = maiorNumero(n1, n2)
console.log(aux6)

console.log("------------------------------------------------------")

let idade = Number(prompt("Informe a idade: "))
function verificarIdade (idade) {
if(idade >= 18){
    return "Maior de idade"
}else{
return "Menor de idade"
}
}

let aux7 = verificarIdade (idade)
console.log(aux7)

console.log("------------------------------------------------------")

let numero8 = Number(prompt("Número: "))
function ParouImpar (numero8){
let conta = numero8 % 2
if(conta == 0){
    return "Par"
}else{
    return "Impar"
}
}

let aux8 = ParouImpar (numero8)
console.log(aux8)

console.log("------------------------------------------------------")

let numero9 = Number(prompt("Informe o número: "))
let numero99 = Number(prompt("Informe outro número: "))
let numero999 = Number(prompt("Informe mais um número: "))
function media (numero9, numero99, numero999){
let conta = (numero9 + numero99 + numero999) / 3
return "Média: " + conta
}

let aux9 = media (numero9, numero99, numero99)
console.log(aux9)

console.log("------------------------------------------------------")

let desc = Number(prompt("Valor do produto: "))
function CalcularDesconto (desc){
let conta = desc - (desc *0.10)
return conta
}

let aux10 = CalcularDesconto(desc)
console.log(aux10)
console.log("------------------------------------------------------")
console.log("------------------------------------------------------")
