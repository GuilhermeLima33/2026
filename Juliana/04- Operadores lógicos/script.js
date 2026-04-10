//04- Operadores Lógicos
//&& - e = tudo tem que ser verdade 
// || - ou - apenas uma coisa deve ser verdade
//! - não - inverte o resultado
let idade = 18
let convite = true
console.log(idade >= 10 && convite == true)//true
console.log("------------------------------------------------")

let dia = "quinta"
console.log(dia== "sabado" || dia == "domingo") //false
console.log("------------------------------------------------")

let valor = 20
console.log(valor >= 10 && valor <= 99) //true
console.log("------------------------------------------------")

let bloqueado = false
console.log(!bloqueado)
console.log("-------------------------------------------------")

let numero = Number(prompt("Informe um número"))
console.log(!(numero >= 100))

/* para fazer login em um computador do senai, o usuário deve ser "TDS2" e a senha "senai2026"
.Faça um coódigo que pergunte as credenciais para o usuário e mostre se ele consegue ou não acessar.*/

let loguinn = (prompt("Qual o loguin da conta?"))
let senhaa = (prompt(" Qual a senha da conta?"))
console.log(loguinn == "TDS2" && senhaa == "senai2026")

/*Para ser aprovado o aluno precisa ter nota maior ou igual a 50 e ter a
frequência maior ou igaul a 75.
peça informção para o usuário e veja se ele será aprovado.*/

let nota= Number(prompt("Qual sua nota?"))
let frq = prompt("Qual sua frequência?")
console.log(nota>= 50 && frq >= 75)

/*Para assistir um filme de terror no cinema, é preciso ter
 idade maior ou igual a 14 ou estar acompanhado do responsável*/

let idadee = Number(prompt("Qual sua idade?"))
let respon = prompt("Você está acompanhado?")
console.log(idadee >= 14 || respon == "sim")

/*Para fazer academia do sesi você DEVE SER ALUNO DO SESI 
OU DO SENAI E PAGAR A MENSALIDADE*/

let escola = prompt("Você estuda no sesi ou senai?")
let mensalidade = prompt("Você paga mensalidade?")
console.log((escola == "sesi" || escola=="senai") && mensalidade == "sim"  )

/*Pergunte para o usuário se ele tem internet (true/false) e mostre*/
let internet = prompt("Você tem internet?")
console.log(internet == true)
console.log(internet)