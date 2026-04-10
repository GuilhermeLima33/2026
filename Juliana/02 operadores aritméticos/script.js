let numero1 = 5
let numero2 = 7
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 * numero2
let modulo = numero1 % numero2

console.log(" A soma é: " + soma)
console.log(" A subtração é: " + subtracao)
console.log(" A multiplicação é: " + multiplicacao)
console.log(" A divisão é: " + divisao)
console.log( `O resto da divisão é:  ${ modulo}`)

//incremento e decremento
let contador = 10
contador++ 
console.log(contador)
contador--
console.log(contador)
contador +=5 //15
contador -=2 //13 

//--------------------------------------

let salario = Number(prompt ("Qual o seu salário?"))
let total = salario + 100
console.log (total)

let amigos = Number (prompt("Qual a quantidade de amigos?"))
let valor = Number (prompt("Qual o valor da conta?"))
let resultado = valor / amigos
console.log ("cada um ira pagar: " + resultado)


let amg1 = Number (prompt("Quanto de $ Você ira contribuir amigo1?"))
let amg2 = Number (prompt("Quanto de $ Você ira contribuir amigo2?"))
let amg3 = Number (prompt("Quanto de $ Você ira contribuir amigo3?"))
let contri = amg1 + amg2 + amg3
console.log ("Juntos eles tem: "+ contri + "$")


let quanti = Number (prompt("Quantos produtos você deseja comprar?"))
let preco = Number (prompt("Qual o valor do produto?"))
let totall= quanti * preco
console.log("O  preço total será: " + totall + "$")