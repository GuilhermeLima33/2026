console.log("1 - Contador simples")
let contador = 1
do{
console.log(contador)
contador ++
}while (contador <= 20)

console.log("2 - Resposta do usuário")
let continuar8
do{
continuar8 = prompt("Deseja continuar?")
}while(continuar8 == "s")

console.log("3 - Sequência numérica definida pelo usuário")
let contador3 = 1
let final = Number(prompt("Digite um numero:"))
do{
    console.log(contador3)
    contador3++
}while (contador3 <= final)

console.log("4 - Contador com salto")
let contador4 = 1
let userCont = Number(prompt("Indique o número final:"))
do{
    console.log(contador4)
    contador4 ++
}while (contador4 <= userCont)

console.log("5 - Classificação numérica")
let pergunta22
let contador33 = 1
do{
    pergunta22 = Number(prompt("Informe um número:"))
    if (pergunta22 > 0){
        console.log("NÚMERO POSITIVO")
    }else if(pergunta22 < 0){
     console.log("NÚMERO NEGATIVO")   
    }else{
    console.log("O NÚMERO É ZERO")
    }

    contador33 ++
}while (contador33 <= 5)


console.log("6 - Operações matemáticas")

let soma2 = 0
let somaaux1 = 0 
let somaaux2 = 0
let pergunta2
let pergunta3
let pergunta1 = prompt("Deseja fazer uma conta?")
do{
pergunta2 = Number(prompt("Indique um número:"))
pergunta3 = Number(prompt("Indique outro número:"))
soma2 = pergunta2 + pergunta3
pergunta1 = prompt("Deseja fazer outra conta?")
somaaux2 = somaaux2 + pergunta2
somaaux1 = somaaux1 + pergunta3
soma2 = somaaux1 + somaaux2
}while(pergunta1 == "s")
    console.log(soma2)


console.log("7 - Repetição de mensagem")
let contjava = 1
let java = "Estudando JavaScript"
do{
console.log(java)
contjava++
}while(contjava<=10)


console.log("8 - Validação de número positivo")

let pergunta5
do{
pergunta5 = Number(prompt("Indique um número"))
console.log("Número positivo")
}while(pergunta5 >= 0)
    console.log("Numero negativo")


   console.log("9 - Controle de tentativas") 
let perguntaSesi
do{
perguntaSesi = prompt("Indique a senha:")
}while(perguntaSesi != "senai2026")
    console.log("Acesso liberado")


console.log("10 - Soma de números")
soma33 = 0
let number
let continuar
do{
number = Number (prompt("Solicite um número positivo:"))
continuar = prompt("Deseja continuar?")
soma33 = soma33 + number
}while (continuar == "s")
console.log(soma33)









