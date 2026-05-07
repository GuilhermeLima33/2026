let texto = document.getElementById("texto")
function troca(){
    texto.innerText = "Outro texto"

}

// ----------------------------------

let texto2 = document.getElementById("texto2")
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    // texto2.innerText = "Outro texto 2"
    if(texto2.innerText == "Texto do Site"){
        texto2.innerText = "Outro texto 2"
    }else{
        texto2.innerText = "Texto do Site"
    }
})

let clique = document.getElementById("clique")
let contador = document.getElementById("contador")
let contagem = 0
clique.addEventListener("click", function() {
    contagem++
    contador.innerText = contagem
})

let nome = document.getElementById("nome")
let espelho = document.getElementById("espelho")

nome.addEventListener("input", function() {
    espelho.innerText = nome.value
    nome.style.borderColor = "blue"
    // Podemos usar o .value a qualquer momento
})

// let input = document.getElementById("input")
// input.addEventListener("focus", function(){
//     input.style.outline = "none"
//     input.style.border = "2px solid blue"
// })

// input.addEventListener("blur", function() {
//     input.style.border = "2px solid black"
// })

let titulo = document.getElementById("titulo")
titulo.addEventListener("mouseover", function(){
titulo.innerText = "Você achou o texto secreto"
})

titulo.addEventListener ("mouseout", function(){
titulo.innerText = "Texto inicial"
})

let imagem = document.getElementById("imagem")
imagem.addEventListener("mouseover", function(){
imagem.src = "img/vasco.jpg"
})

imagem.addEventListener ("mouseout", function(){
imagem.src = "img/carros 2.jpg"
})

let textoMud = document.getElementById("textoMud")
textoMud.addEventListener("mouseover", function(){
textoMud.style.color = "green"
textoMud.style.backgroundColor = "red"
})

textoMud.addEventListener("mouseout", function(){
textoMud.style.color = "black"
textoMud.style.backgroundColor = "white"
})
