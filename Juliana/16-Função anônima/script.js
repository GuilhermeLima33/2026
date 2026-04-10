// Declarativas
function soma1 (n1, n2){
    return n1+n2
}
let n1 = 5
let n2 = 7
console.log(soma1(n1, n2))

//Anônima
let soma2 = function (n3, n4){
    return n3 + n4
}
let n3 = 5
let n4 = 7
console.log(soma2(n3,n4))

//saudação
let bomDia = function (Nome){
return "Bom dia " + nome
}

// let nome = prompt("Qual seu nome? ")
// console.log(bomDia(nome))

//Multiplicar três números
let multiplicar = function (num1, num2, num3){
return num1 * num2 * num3 
}

// let num1 = Number(prompt("Informe um número: "))
// let num2 = Number(prompt("Informe um número: "))
// let num3 = Number(prompt("Informe um número: "))
// console.log(multiplicar(num1,num2,num3))

let valorTemp = Number(prompt("Informe o valor da temperatura: "))
let temperatura = function(valorTemp){
if(valorTemp > 30){
return "Calor"
}else if (valorTemp < 12){
    return "frio"
}else{
    return "Ok"
}
}

console.log(temperatura(valorTemp))