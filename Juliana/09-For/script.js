//Laço de repetição - for

console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")

for(let i = 0; i<4; i++){
    console.log("Bom dia usando For")
}

console.log("----------------------------------------------------")
for (let i = 1; i<= 5 ; i ++){
    console.log(i)
}

//contagem regressiva
for(let i = 10; i >= 1; i--){
    console.log(i)
}

console.log("----------------------------------------------------")
for (let i = 1; i<=5; i++){
    let numero = Number (prompt("Informe um número"))
    if(numero >10){
        console.log("É maior que 10")
    }else{
        console.log("Não é maior que 10")
    }
}

console.log("----------------------------------------------------")
let soma = 0
for (let i = 1 ; i<= 3 ; i++){
    let numero = Number(prompt("Digite um número"))
    soma= soma + numero
}
console.log("O resultado final é: " + soma)
console.log("----------------------------------------------------")

/* peça um número para o usuário e peça a tabuada dele*/
let valor = Number(prompt("Digite um número:"))
for(let i = 1; i <= 10; i ++ ){
let resultado = valor * i
console.log(valor, "x", i , " = ", resultado)
}

console.log("----------------------------------------------------")
/*Em um passeio escolar, um grupo de cinco alunos são organizados 
de acordo com o número que receberam. Se o número for maior ou igual
 a 10, diga "Grup A", senão diga "Grupo B"*/

 for (let i = 1; i <= 5; i++){
    let numerorecebido = Number(prompt("Qual seu número?"))
    if(numerorecebido >= 10){
        console.log("Grupo A")
    }else{
        console.log("Grupo B")
    }
 }


