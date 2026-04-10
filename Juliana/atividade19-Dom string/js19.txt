function minusculo (){
let tx1 = document.getElementById("tx1").value
let rst1 = document.getElementById("rst1")

rst1.innerText = tx1.toLocaleLowerCase()
}

function quant(){
let tx2 = document.getElementById("tx2").value
let rst2 = document.getElementById("rst2")

rst2.innerText = tx2.length
}

function ultimaLetra (){
let tx3 = document.getElementById("tx3").value
let rst3 = document.getElementById("rst3")

rst3.innerText = tx3[tx3.length-1]
}

function primeirasLetras(){
let tx4 = document.getElementById("tx4").value
let rst4 = document.getElementById("rst4")

let Pletras = tx4.slice(0,4)
rst4.innerText = Pletras
}

function ultimaLetras(){
let tx5 = document.getElementById("tx5").value
let rst5 = document.getElementById("rst5")

let Uletras = tx5.slice(-3)
rst5.innerText = Uletras
}

function nome(){
let tx6 = document.getElementById("tx6").value
let tx66 = document.getElementById("tx66").value
let rst6 = document.getElementById("rst6")

rst6.innerText = tx6 + " " + tx66
}

function destaque(){
let tx7 = document.getElementById("tx7").value
let rst7 = document.getElementById("rst7")

rst7.innerText = "A primeira letra do seu nome é: " + tx7[0]
}

function Formatado(){
let tx8 = document.getElementById("tx8").value
let rst8 = document.getElementById("rst8")

rst8.innerText = "Olá " + tx8.toUpperCase() + " seja bem-vindo ao sistema."
}

function verificar (){
let tx9 = document.getElementById("tx9").value
let rst9 = document.getElementById("rst9")
if(tx9.length <= 5){
rst9.innerText = "Nome curto"
}else{
rst9.innerText = "Nome longo"
}

}