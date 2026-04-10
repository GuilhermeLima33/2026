//script.js
let titulo = document.getElementById("titulo")
//No HTML.Pegue o elemento por id
function mudarTexto(){
    titulo.innerTextText + "Você clicou no botão"
    titulo.style.color = "blue"
}



let mensagem = document.getElementById("mensagem")
function saudacao(){
    let nome = document.getElementById("nome").value
    mensagem.innerText = "olá " + nome
}
const texto = document.getElementById("texto")
function sumir(){
    

    if(texto.style.display == "none"){
        texto.style.display = "block"
    }else {
        texto.style.display = "none"
    }
}

let mud = document.getElementById("text2")
function mudarcortext (){
mud.style.color = "red"
mud.style.backgroundColor = "Blue"
}