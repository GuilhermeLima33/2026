console.log("1 – Contador")
for(let i= 1; i<= 30; i++){
    console.log(i)
}
console.log("2 – Contagem Regressiva")
for(let i = 30; i >=1; i--){
    console.log(i)
}
console.log("3 – Classificação de Números")
for (let i=1; i<=5; i++){
let numero = Number(prompt("Mostre um número:"))
if(numero >= 50){
    console.log("Acima da média")
}else{
    console.log("Abaixo da média")
}
}

console.log("4 – Tabuada")
let tabuada = Number(prompt("Digite o número da tabuada:"))
for(let i=1; i<= 10; i++){
let resultado = tabuada * i
console.log(tabuada, " x " , i , " = " ,resultado)
}

console.log("5 – Canção dos Patinhos ")
let patinhos = Number(prompt("Quantos patinhos foram passear?"))
for (let i= patinhos; i>=1; i--){
    console.log(i , "patinhos foram passear Além das montanhas para brincar A mamãe gritou: Quá, quá, quá, quá Mas só" ,i-1, "patinhos voltaram de lá.")
}

console.log("6 – Classificação de Idades")
for(let i= 1 ; i <=10; i++){
let idades = Number(prompt("Informe idades:"))
if(idades >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de iade")
}
}

console.log("7 – Eleição")
for(let i= 1 ; i <=5; i++){
 let voto = Number(prompt("Qual o número do seu voto?"))
 if(voto == 1||voto ==2||voto ==3|| voto ==4){
 console.log("Candidato")
 }else if(voto == 5){
    console.log("branco")
 } else{
    console.log("Nulo")
 }  
}

console.log("8 – Soma dos Números")
soma= 0
for(let i=1; i<=5; i++){
let numsoma = Number(prompt("Informe um número:"))
soma= soma + numsoma
}
console.log("A soma é: " + soma)

console.log("9 – Números Pares")
for (let i=2; i<=50; i+=2){
    console.log(i)
}

let inicio = Number(prompt("QUAL O NÚMERO INCIAL?"))
let final = Number(prompt("QUAL O NÚMERO FINAL?"))
for(let i=inicio; i<=final; i++){
    console.log(i)
}

