let bt1 = document.getElementById("bt1")
let mud = document.getElementById("mud")
bt1.addEventListener("click", function (){
if(mud.innerText == "Mud1"){
mud.innerText = "Mud2"
}else{
mud.innerText = "Mud1"
}
})

// ----------------------------------------------------------
let fundo = document.getElementById("fundo")
let bt2 = document.getElementById("bt2")
fundo.style.backgroundColor = "white"
bt2.addEventListener("click", function (){
if (fundo.style.backgroundColor == "white"){
fundo.style.backgroundColor = "black"
}else{
    fundo.style.backgroundColor = "white"
}
})

// ------------------------------------------------------------

let contador = document.getElementById("contador")
let bt3 = document.getElementById("bt3")
let numero = 0
bt3.addEventListener("click", function (){
numero ++
contador.innerText = numero
})

// ----------------------------------------------------------

let fantasma = document.getElementById("fantasma")
let bt4 = document.getElementById("bt4")
fantasma.innerText = "Sumir"
bt4.addEventListener("click", function(){
if(fantasma.innerText == "Sumir"){
fantasma.innerText = ""    
}else{
fantasma.innerText = "Sumir"
}
})

// ----------------------------------------------------------
let campo5 = document.getElementById("campo5")
let espelho = document.getElementById("espelho")

campo5.addEventListener("input", function() {
    espelho.innerText = campo5.value
})

// ----------------------------------------------------------
let campo6 = document.getElementById("campo6")
let maiusculo = document.getElementById("maiusculo")

campo6.addEventListener("input", function() {
    maiusculo.innerText = campo6.value.toUpperCase()
})

// ----------------------------------------------------------
let campo7 = document.getElementById("campo7")
let contagem = document.getElementById("contagem")

campo7.addEventListener("input", function() {
    contagem.innerText = "Você digitou " + campo7.value.length + " caracteres"
})

// ----------------------------------------------------------
let campo8 = document.getElementById("campo8")
let validacao = document.getElementById("validacao")

campo8.addEventListener("input", function() {
    if (campo8.value.length < 5) {
        validacao.innerText = "Texto muito curto"
    } else {
        validacao.innerText = "Texto válido"
    }
})

// ----------------------------------------------------------
let caixa = document.getElementById("caixa")

caixa.addEventListener("mouseover", function() {
    caixa.style.backgroundColor = "green"
})
caixa.addEventListener("mouseout", function() {
    caixa.style.backgroundColor = "blue"
})

// ----------------------------------------------------------
let bt10 = document.getElementById("bt10")
let msg10 = document.getElementById("msg10")

bt10.addEventListener("mouseover", function() {
    msg10.style.display = "block"
})
bt10.addEventListener("mouseout", function() {
    msg10.style.display = "none"
})

// ----------------------------------------------------------
let frase11 = document.getElementById("frase11")

frase11.addEventListener("mouseover", function() {
    frase11.innerText = "SURPRESA!"
})
frase11.addEventListener("mouseout", function() {
    frase11.innerText = "Frase original"
})

// ----------------------------------------------------------
let campo12 = document.getElementById("campo12")
let texto12 = document.getElementById("texto12")
let btLimpar = document.getElementById("btLimpar")

campo12.addEventListener("input", function() {
    texto12.innerText = campo12.value
})

texto12.addEventListener("mouseover", function() {
    texto12.style.color = "red"
})
texto12.addEventListener("mouseout", function() {
    texto12.style.color = "black"
})

btLimpar.addEventListener("click", function() {
    campo12.value = ""
    texto12.innerText = "O texto aparece aqui"
})