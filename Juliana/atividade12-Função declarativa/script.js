console.log("1 - Primeira Função")
function mensagemInicial (){
console.log("Aprendendo funções com JS")
}
mensagemInicial ()

console.log("2 - Mensagem de Boas-Vindas")
function boasVindas (){
console.log("Desenvolvimento de Sistemas!")
}
boasVindas()

console.log("3 - Contador Simples")
function contarAteDez (){
for (let i = 0; i <= 10; i ++){
console.log(i)
}
}

contarAteDez()

console.log("4 - Contagem Regressiva")
function contagemRegressiva (){
for(let i = 10; i>= 1; i --){
console.log(i)
}
}

contagemRegressiva()

console.log("5 - Repetindo Mensagem")
function mensagemRepetida (){
    for(let i = 1; i <= 5; i ++){
console.log("Eu gosto de JavaScript")
    }
}
mensagemRepetida()

console.log("6 - Números Pares")
function numerosPares (){
for (let i = 0; i <= 20; i += 2){
console.log(i)
}
}

numerosPares()

console.log("7 - Tabuada Fixa")
function taboadaDoDois (){
for(let i = 1; i <= 10; i ++){
let calculo = 18 * i
console.log(calculo)
}
}

taboadaDoDois()

console.log("8 - Número Par ou Ímpar:")
function mostrarSoma (){
let n1 = Number(prompt("Informe um número:"))
let n2 = Number(prompt("Informe outro número:"))
let soma = n1 + n2
console.log(soma)
}

mostrarSoma()


console.log("9 - Aviso Repetido")
function alertaSistema(){
for(let i = 1; i <= 3; i ++){
console.log("Atenção! Verifique as informações.")
}
}

alertaSistema()

console.log("10 - Organização de Código")
function mensagem1 (){
let msg1 = prompt("insira texto 1: ")
console.log(msg1)
}
function mensagem2 (){
let msg2 = prompt(" insira texto 2: ")
console.log(msg2)
}
function mensagem3 (){
let msg3 = prompt("insira texto 3: ")
console.log(msg3)
}

mensagem1()
mensagem2()
mensagem3()

console.log("11 - Soma de números")
function somaCincoNumeros (){
let soma = 0
for (let i = 1; i <= 5; i ++){
let numerosss = Number(prompt(" Informe o numero para a soma:"))
soma = (soma + numerosss)
console.log(soma)
}
}
somaCincoNumeros()

console.log("12 - Cálculo de aumento")
function calculoAlmento (){
let salario = Number(prompt("Qual seu salário?"))
if(salario >= 3500){
let aumento = salario + 500
console.log(aumento)
}else{
    console.log("Não terá aumento")
}
}
calculoAlmento()

console.log("13 - Aprovação Escolar")
function aprovacaoEscolar (){
let soma = 0
let media = 0
for(let i = 1 ; i <= 3; i ++){
let pg = Number(prompt(i+") informe a nota: "))
soma = soma + pg
}
media = soma / 3
if(media > 6){
    console.log("Aprovado")
}else if(media >= 5){
console.log("Recuperação")
}else{
    console.log("Reprovado")
}
}
aprovacaoEscolar()

console.log("14 - Aprovação Escolar")
function avaliacaoAtendiamento(){
let  pgt = Number(prompt("Qual a nota?"))
if(pgt == 9 || pgt == 10){
console.log("Excelente")
}else if(pgt == 8){
    console.log("Ótimo")
}else if(pgt == 6 || pgt ==7){
console.log("Bom")
}else if (pgt == 5){
console.log("Regular")
}else if(pgt > 10){
    console.log("Número não identificado")
}else{
    console.log("Ruim")
}
}

avaliacaoAtendiamento()
