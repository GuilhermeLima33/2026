let i = 1
while (i<= 5){
    console.log(i)
    i++
}

let resposta = prompt("Deseja acessar o sistema? ")
while (resposta == "sim" ){
    console.log("Bem vindo ao sistema")
    resposta= prompt("Deseja acessar o sistema?")
}
console.log("-----------------------------------------")
let senha = prompt("Digite sua senha:")
while(senha!= "senai2026"){
    senha= prompt("Senha imcorreta. Tente novamente: ")
}
console.log("Acesso liberado")

console.log("-----------------------------------------")
let nota = Number(prompt("Digite uma nota de 0 a 10:"))
while( nota <0 || nota >10){ 
    nota = Number(prompt("valor inválido. Digite novamente:"))
}
console.log("Nota válida: " , nota)

/*peça para o usuário 3 números, some eles e mostre o resultado da soma */
let soma = 0
let aux = 1
while (aux <= 3){
let numero = Number(prompt("Digite um número"))
soma = soma + numero
aux++
}
console.log("O resultado é: ", soma)

console.log("-----------------------------------------")
let login = prompt("Qual o login de acesso?")
let senhaa = prompt("Qual a senha de acesso?")
while(login != "TDS2" || senhaa != "senai" ){
login = prompt ("Qual o login? ")
senhaa = prompt ("Qual a senha? ")
}
console.log("Liberado")

console.log("-----------------------------------------")
let x = 1
while (x<= 10){
    console.log (x)
    x++
}

console.log("-----------------------------------------")

let magica = prompt("Qual a palavra mágica?")
while (magica != "abracadabra"){
    magica = prompt("Errou.Qual a palavra mágica?")
}
console.log("Acertou")

let controlador = 1
let mult = 1
let num 
while (controlador<= 3){
num = Number(prompt("Informe o "+ controlador + "° numero"))
mult = mult * num 
console.log (mult)
controlador ++
}
console.log ("O resultado é:", mult)