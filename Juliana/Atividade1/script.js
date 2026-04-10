console.log("1 - Declare duas variáveis numéricas e exiba:")
let vari1 = Number (prompt("Exiba um número: "))
let vari2 = Number (prompt("Exiba outro número: "))
let soma = vari1 + vari2
let sub = vari1 - vari2
let mult = vari1 * vari2
let div = vari1 / vari2
let resto = vari1 % vari2
console.log("Soma: "+ soma)
console.log("Subtração: "+ sub)
console.log("Multiplicação: "+ mult)
console.log("Divisão: "+ div)
console.log("Resto: "+ resto)

console.log("2 - Área de um Retângulo")
let altura = Number (prompt("Qual o tamanho da altura?"))
let largura = Number (prompt("Qual o tamanho da largura?"))
let area = altura * largura
console.log("A area dao retângulo é de: "+ area)

console.log("3 - Dobro e Metade")
let number1 = 10
console.log("Número escolhido: " + number1)
let dobro = number1 * 2
console.log("O dobro desse número: " + dobro )
let metade = number1 / 2
console.log ("A metade desse número: "+ metade)

console.log("4 - Média Aritmética")
let n1 = 15
let n2 = 25
let n3 = 30
console.log(" Nota 1 : "+ n1 + " Nota 2: "+ n2 + " Nota 3: "+ n3)
let media = (n1+n2+n3) / 3
console.log("Resultado da média: "+ media)

console.log("5 - Conversão de Temperatura")
let celsius = Number (prompt("Qual a temperatura que você deseja converter?"))
let tempf = (celsius * 9/5) + 32
console.log("Temperatura convertida: " + tempf)

console.log("6 - Valor da Compra")
let quanti = Number (prompt("Quantos produtos você deseja comprar?"))
let preco = Number (prompt("Qual o valor do produto?"))
let totall= quanti * preco
console.log("O  preço total será: " + totall + "$")

console.log("7 - Divisão da Conta")
let valorconta = Number (prompt("Qual o valor total da conta?"))
let numberpessoas = Number (prompt("Quantas pessoas irão pagar a conta?"))
let result = valorconta / numberpessoas
console.log("Cada pessoa deve pagar: "+ result)

console.log("8 - Idade em Meses")
let idade = Number (prompt("Qual sua idade?"))
console.log("Idade: "+ idade)
let conversao = idade * 12
console.log("Sua conversão de idade em anos para meses é de: "+ conversao)

console.log("9 - Divisão Exata")
let n4 = Number (prompt("Diga um número: "))
let n5 = Number (prompt("Informe outro número: "))
console.log("Numero 1 : "+n4)
console.log("Numero 2 : "+n5)
let resultdiv = n4 / n5
let resultresto = n4 % n5
console.log("Resultado da divisão: "+ resultdiv)
console.log("Resultado do resto: "+ resultresto)

console.log("10 - Horas em Minutos")
let convertnum = Number (prompt("Diga uma hora: "))
console.log("Horario: "+ convertnum)
let resultadohoras = convertnum * 60
console.log("Conversão em horas: "+resultadohoras)





