let titulo = document.getElementById("titulo")
function mudar(){
  titulo.innerText = "Mudei o titulo"  
  titulo.style.color = "red"
}

function saudacao(){
    let nome = document.getElementById("nome").value
    //no input coloque .value
    let texto = document.getElementById("texto")
    texto.innerText = "Bom dia " + nome
}

function situacao (){
    let nota = document.getElementById("nota").value
    let resultado = document.getElementById("resultado")

    if(nota>=6){
        resultado.innerText= "Aprovado"
    }else{
        resultado.innerText= "Reprovado"
    }
}
let foto = document.getElementById("foto")
function sumir (){
if(foto.style.display == "none"){
    foto.style.display = "block"
}else{
foto.style.display = "none"
}
}
