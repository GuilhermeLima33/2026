//1-----------------------------------------------------------------
let alt = document.getElementById("alttext")
function mudarTexto (){
alt.innerText = "Aprendendo Dom com JavaScrip t"
}

//2-----------------------------------------------------------------

let mensagem = document.getElementById("mensagemdentro")
function BoasVindas (){
let nome = document.getElementById("nome").value
mensagem.innerText = "Boas-Vindas " + nome
}
//3----------------------------------------------------------------


let mudar = document.getElementById("mudarfrase")
function trocartexto (){
mudar.innerText = "Manipulando Html com JavaScript" 
}

//4-----------------------------------------------
let mensagem2 = document.getElementById("mensagem2")
function saudacao2() {
    let nome2 = document.getElementById("nome2").value
    if(nome2 == 0){
        mensagem2.innerText = "Digite um nome primeiro! "
    }else{
    mensagem2.innerText = "Olá "+ nome2
}
}

//5----------------------------------------------
function modoEscuro() {
    if(body.style.backgroundColor == "black"){
    body.style.background = "white"
}else{
    body.style.background = "black"
}
}

//6----------------------------------------------
let situacao = document.getElementById("situacao")
function verificarNota() {
    let nota = document.getElementById("nota").value
    if(nota >= 7){
        situacao.innerText = "Aluno aprovado"
    }else{
    situacao.innerText = "Aluno reprovado"
}
}

// 7----------------------------------------------
let mensagemSecreta = document.getElementById("mensagemSecreta")

function surpresa() {
    mensagemSecreta.innerText = "Você encontrou a mensagem secreta!"
}


// 8----------------------------------------------
let texto8 = document.getElementById("texto8")

function destacar() {
    texto8.style.color = "red"
    texto8.style.fontWeight = "bold"
}


// 9----------------------------------------------
let resultado9 = document.getElementById("resultado9")

function contarCaracteres() {
    let texto = document.getElementById("textoInput").value
    resultado9.innerText = "Você digitou " + texto.length + " caracteres"
}


// 10----------------------------------------------
let texto10 = document.getElementById("texto10")

function mudarCorTexto() {
    texto10.style.color = "blue"
}


// 11----------------------------------------------
let texto11 = document.getElementById("texto11")

function esconderTexto() {
    texto11.style.display = "none"
}


// 12----------------------------------------------
let resultado12 = document.getElementById("resultado12")

function calcularMeses() {
    let idade = document.getElementById("idadeMeses").value
    let meses = idade * 12
    resultado12.innerText = "Você já viveu " + meses + " meses"
}


// 13----------------------------------------------
let resultado13 = document.getElementById("resultado13")

function verificarIdade() {
    let idade = document.getElementById("idade13").value

    if(idade >= 18){
        resultado13.innerText = "Você é maior de idade"
    } else {
        resultado13.innerText = "Você é menor de idade"
    }
}
