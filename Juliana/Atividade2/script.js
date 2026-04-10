console.log("1 - Comparando Dois Números")
let n1 = 9
let n2 = 7
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1==n2)

console.log("2 - Idade para Votar")
let idadevoto = Number(prompt("Qual a sua idade?" ))
console.log(idadevoto >= 16)

console.log("3 - Maioridade")
let idade = Number(prompt("Qual a sua idade?" ))
console.log(idade >= 18)
console.log(idade >= 60)

console.log("4 - Verificação de Login")
let nome = Number(prompt("Qual o seu Nome de usuário? "))
console.log(nome == "admin")

console.log("5 - Saldo Bancário")
let saldo = Number(prompt("Qual o saldo da conta? "))
let saque = Number(prompt("Quanto voce deseja sacar? "))
console.log("Saldo da conta: "+ saldo)
console.log("Valor do saque: "+saque)
let contasaque = saldo - saque
console.log(saldo >= saque)
console.log(contasaque > 100)

console.log("6 - Média do Aluno")
let nota1 = Number(prompt("Indique um número: "))
let nota2 = Number(prompt("Indique outro número: "))
let media = nota1/nota2
console.log(media >= 6)

console.log("7 - Preço do Produto")
let produto = Number(prompt("Indique o valor do produto: "))
console.log(produto > 50)
console.log(produto <= 20)

console.log("8 - Velocidade da Via")
let velocidade = (prompt("Qual a velocidade do carro?"))
console.log(velocidade > 80)
console.log(velocidade > 120)

console.log("9 - Altura para Brinquedo")
let altura = (prompt("Qual sua altura? (Em metros)"))
console.log(altura >= 1.40)

console.log("10 - Nome Cadastrado")
let noome = (prompt("Qual seu nome?"))
console.log(noome > "Maria")
console.log(noome != "João")

console.log("11 - Senha Simples")
let senha = (prompt("Qual sua senha?"))
console.log(senha == "1234")

console.log("12 - Parcelamento")
let valor= (prompt("Qual o valor da compra?"))
let parcela= (prompt("Quantas vezes você deseja parcelar? "))
let valortotal = valor / parcela
console.log(valortotal <= 200)

console.log("13 - Idade em Meses")
let idadeanos = (prompt("Qual sua idade? (em anos)"))
console.log(idadeanos * 12)




