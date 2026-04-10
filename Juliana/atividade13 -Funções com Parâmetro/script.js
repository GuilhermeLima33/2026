let dobro = Number(prompt("Informe um número:"))
function numerodobro (dobro){
let result = dobro * 2
console.log(result)
}
numerodobro(dobro)

console.log("-------------------------------------------------")

let num2 = Number(prompt("informe a base do retângulo:"))
let num3 = Number(prompt("Informe a altura do retângulo: "))
function area (num2, num3){

    let resultarea = num2 * num3
    console.log(resultarea)
}
area (num2, num3)

console.log("-------------------------------------------------")

let tempCelsius = Number(prompt("informe a temperatura em Celsius:"))
function converterParaFahrenheit (tempCelsius){
let conversao = (tempCelsius * 1.8) + 32
console.log(conversao)
}
converterParaFahrenheit (tempCelsius)

 console.log("-------------------------------------------------")
let nota = Number(prompt("informe uma nota:"))
function verificarNota (nota){
if(nota >= 7){
    console.log("Aprovado")
}else if (nota >= 5){
console.log("Recuperação")
}else{
    console.log("Reprovado")
}
}
verificarNota (nota)

console.log("-------------------------------------------------")
let num4 = Number(prompt("Inform um número: "))
function verificarNumero (num4){
if(num4 > 0){
    console.log("Positivo")
}else if (num4 == 0){
console.log("Zero")
}else{
    console.log("Negativo")
}
}
verificarNumero (num4)

console.log("-------------------------------------------------")
let num5 = Number(prompt("Informe um número final:"))
function contarNumeros (num5){
for(i = 0; i <= num5; i += 2){
console.log(i)
}
}
contarNumeros (num5)

console.log("-------------------------------------------------")

let numero1 = Number(prompt("informe o número primário:"))
let numero2 = Number(prompt("informe o número final:"))
function somarIntervalo (numero1, numero2){
soma2 = 0
for(i = numero1; i <= numero2; i++ ){
soma2 = soma2 + i
console.log(soma2)
}
}
somarIntervalo (numero1, numero2)

console.log("-------------------------------------------------")
let nome8 = prompt("Qual seu nome? ")
let vezes8 = Number(prompt("Quantas vezes deve se repetir?"))
function repetirNome (nome8, vezes8){
for (i = 1; i <= vezes8; i ++){
console.log(nome8)
}
}
repetirNome (nome8, vezes8)

console.log("-------------------------------------------------")
let numTabuada = Number(prompt("De qual tabuada deseja saber?"))
function tabuada (numTabuada){
    let contatabuada = 0
    for (i = 1; i <= 10; i ++){
    contatabuada = numTabuada * i
    console.log(contatabuada)
    }
}

tabuada (numTabuada)

console.log("-------------------------------------------------")
let regressivanum = Number(prompt("Qual numero começar?"))
function contagemPersonalizada (regressivanum){
for(i = regressivanum; i >= 0; i --){
let aux = i % 2
if(aux == 1){
    console.log(i)
}
}
}
contagemPersonalizada (regressivanum)

console.log("-------------------------------------------------")
let nota11 =  Number(prompt("1° Nota: "))
let nota22 =  Number(prompt("2° Nota: "))
let nota33 =  Number(prompt("3° Nota: "))
function mediaAluno (nota11, nota22, nota33){
let inteiro = (nota11 + nota22 + nota33) / 3
if(inteiro >= 7){
    console.log("Aprovado")
}else if(inteiro > 5){
    console.log("Recuperação")
}else if (inteiro <= 5){
    console.log("Reprovado")
}else{
    console.log("Nota incorreta")
   
}
console.log("Nota: "+ inteiro)
}
mediaAluno (nota11, nota22, nota33)
