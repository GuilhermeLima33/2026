//Dom - String
let nome = "Guilherme"
let maiuscula = nome.toUpperCase()
let minuscula = nome.toLocaleLowerCase()

console.log(maiuscula)
console.log(minuscula)
console.log(nome[8])


// ------------------------------------------------------------

function mostrar(){
let texto = document.getElementById("texto").value
let mn = document.getElementById("mn")
let ms = document.getElementById("ms")
let letras = document.getElementById("letras")

ms.innerText = texto.toUpperCase()
mn.innerText = texto.toLocaleLowerCase()
letras.innerText = texto.length

let texto2 = document.getElementById("texto")
texto2.value = ""
}

// -----------------------------------------------------------

function parte(){
let palavra = document.getElementById("palavra").value
let resultado = document.getElementById("resultado")
                    // slice  inicio e fim
let parte = palavra.slice(0,3)
resultado.innerText = parte

let final = document.getElementById("final")
final.innerText = palavra[palavra.length-1]
}

// ----------------------------------------------------------

function juntar (){
let tx1 = document.getElementById("tx1").value
let tx2 = document.getElementById("tx2").value
let juntarrt = document.getElementById("juntarrt")

juntarrt.innerText = tx1 + " "+ tx2

let tx12 = document.getElementById("tx1")
tx12.value = ""
let tx23 = document.getElementById("tx2")
tx3.value = ""
}