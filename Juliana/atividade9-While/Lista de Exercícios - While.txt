console.log("1 - Contador:")

let i = 1
while (i<= 10){
console.log(i)
i++
}

console.log("2 - Tabuada:")

tabuada = 1
aux = 1
let numero1 = Number(prompt("Informe o Número da tabuada:"))
while (tabuada<= 10){
aux = tabuada * numero1
tabuada ++
console.log(aux)
}

console.log("3 - Contagem Regressiva:")
regressiva = 10
while (regressiva >= 1){
console.log(regressiva)
regressiva --
}

console.log("4 - Verificação de senha:")

let senha = Number(prompt("Informe uma senha:"))
while(senha != "1234"){
senha = Number(prompt("Senha incorreta. Tente novamente:"))
}
console.log("Senha correta")

console.log ("5 - Contador:")
contador = 50
while (contador <= 100){
console.log(contador)
contador ++
}

console.log("6 - Sequência numérica:")

contador2 = 0
while (contador2 <= 100){
console.log (contador2)
contador2 += 5
}

console.log("7 - Mostrando mensagem:")
auxiliar = 1
 let java = "Eu gosto de JavaScript"
 while (auxiliar <= 5){
console.log (java)
auxiliar++
 }

console.log("8 - Exibindo o nome:")

cont = 1
let nome = (prompt("Qual seu nome?"))
let vezes = (Number(prompt("Quantas vezes deve ser repetido?")))
while (cont <= vezes){
console.log(nome)
cont++
}

console.log("9 - Validação de Nota")
let nota = Number(prompt("Exiba uma nota de 0 a 10:"))
while (nota < 0 || nota > 10){
console.log("incorreto. tente novamente")
nota = Number(prompt("Exiba uma nota de 0 a 10:"))   
}
console.log("Nota registrada com sucesso")

console.log("10 - Soma de Números")
let soma = 0
let numeroRep = Number(prompt("Digite um número:"))
 while (numeroRep >= 0){
soma = soma + numeroRep
numeroRep = Number (prompt("Você digitou um número positivo, continue digitando:"))

 }
 console.log("Resultado da soma: " ,soma )

console.log("11 - Menu Simples")
let consulta = Number (prompt("Oque você deseja fazer:\n1-Cadastras\n2-Consultar\n3-Sair"))
while(consulta != 3){
consulta = Number (prompt("Oque você deseja fazer:\n1-Cadastras\n2-Consultar\n3-Sair"))
}
console.log("Você saiu do site")

console.log("12 - Contador de Pares")
contador3 = 2
while (contador3 <= 50){
    console.log(contador3)
    contador3 += 2
}

console.log("13 - Login")
let user = prompt("Qual o usuário de acesso?")
let senhaa = Number (prompt("Qual a senha de acesso?"))
while(user != "admin" || senhaa != "123" ){
user = prompt ("Qual o login? ")
senhaa = prompt ("Qual a senha? ")
}
console.log("Liberado")

console.log("14 - Jogo do Número")
let secret = Number (prompt("Adivinhe o número:"))
while(secret != 7){
console.log("Errou")
secret = Number (prompt("Adivinhe o número:"))
}
console.log("Você acertou")








