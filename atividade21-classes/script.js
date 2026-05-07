let pum = document.getElementById("pum")
let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")
let ad = document.getElementById("ad")

adicionar.addEventListener("click", function(){
    pum.classList.add("ativo")
})

remover.addEventListener("click", function(){
    pum.classList.remove("ativo")
})

ad.addEventListener("click", function(){
    pum.classList.toggle("ativo")
})

let pdois = document.getElementById("pdois")
let add2 = document.getElementById("add2")
let remove2 = document.getElementById("remove2")

add2.addEventListener("click", function(){
    pdois.classList.add("destaque")
})

remove2.addEventListener("click", function(){
    pdois.classList.remove("destaque")
})

let ptres = document.getElementById("ptres")
let add3 = document.getElementById("add3")


add3.addEventListener("click", function(){
    ptres.classList.toggle("grande")
})

let pquatro = document.getElementById("pquatro")
let add4 = document.getElementById("add4")


add4. addEventListener("click", function(){
    pquatro.classList.toggle("escondido")
})

let pcinco = document.getElementById("pcinco")

pcinco.addEventListener("mouseover", function(){
    pcinco.classList.add("hover")
})

pcinco.addEventListener("mouseout", function(){
    pcinco.classList.remove("hover")
})

let aparencia = document.getElementById("aparencia")

aparencia.addEventListener("click", function(){
    aparencia.classList.toggle("aparencia")
})

let dv1 = document.getElementById("dv1")
let dv2 = document.getElementById("dv2")
let dv3 = document.getElementById("dv3")

dv1.addEventListener("click", function(){
    dv1.classList.toggle("selecionado")
    
})

dv2.addEventListener("click", function(){
    dv2.classList.toggle("selecionado")
    
})

dv3.addEventListener("click", function(){
    dv3.classList.toggle("selecionado")
    
})


let h2 = document.getElementById("h2")
let modoescuro = document.getElementById("modoescuro")

modoescuro.addEventListener("click", function(){
    corpo.classList.toggle("Dark")
})

let menu = document.getElementById("menu")
let dvescondido = document.getElementById("dvescondido")

menu.addEventListener("click", function(){
    dvescondido.classList.toggle("mostrar")
})

let caixaInterativa = document.getElementById("caixaInterativa");


caixaInterativa.addEventListener("click", function() {
    caixaInterativa.classList.toggle("cores");
});


caixaInterativa.addEventListener("mouseover", function() {
    caixaInterativa.classList.add("borda");
});


caixaInterativa.addEventListener("mouseout", function() {
    caixaInterativa.classList.remove("borda");
});


let btnVermelho = document.getElementById("btnVermelho");
let btnAzul = document.getElementById("btnAzul");
let btnVerde = document.getElementById("btnVerde");
let caixaCores = document.getElementById("caixaCores");
let core = document.getElementById("core");




btnVermelho.addEventListener("click", function() {
    core.innerText = "Vermelho"
    caixaCores.classList.add("vermelho");
     caixaCores.classList.remove("azul");
     caixaCores.classList.remove("verde");
});

btnAzul.addEventListener("click", function() {
    core.innerText = "Azul"
    caixaCores.classList.add("azul");
    caixaCores.classList.remove("vermelho");
    caixaCores.classList.remove("verde");
});

btnVerde.addEventListener("click", function() {
    core.innerText = "verde"
    caixaCores.classList.add("verde");
    caixaCores.classList.remove("vermelho");
    caixaCores.classList.remove("azul");
});







