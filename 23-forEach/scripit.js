let titulo = document.getElementById ("titulo")
let botao = document.getElementById ("botao")


botao.addEventListener("click", function (){
    document.getElementById("texto").classList.add ("mudar")
    titulo.classList.add("mudar")
})

// 
let itens = document.querySelectorAll(".item")
let troca = document.querySelector("#troca")

itens.forEach(function(item){
troca.addEventListener ("click", function (){
    item.classList.toggle("troca")
})
})

