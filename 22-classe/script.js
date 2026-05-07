let texto = document.getElementById("texto")
let botao = document.getElementById("botao")
let remover = document.getElementById("remover")
let alterar = document.getElementById("alterar")

botao.addEventListener("click", function(){
// texto.style.backgroundColor = "red"
texto.classList.add("troca")
})

remover.addEventListener("click", function (){
texto.classList.remove("troca")
})

alterar.addEventListener("click", function(){
texto.classList.toggle("troca")
})

