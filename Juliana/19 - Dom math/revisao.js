//JS

function arredondar(){
let numero = document.getElementById("numero").value
let round = document.getElementById("round")
let ceil = document.getElementById("ceil")
let floor = document.getElementById ("floor")

round.innerText = Math.round(numero)
ceil.innerText = Math.ceil(numero)
floor.innerText = Math.floor(numero)
}

// ------------------------------------------


function calcular(){
    let valor = document.getElementById("valor").value
    let potencia = document.getElementById("potencia").value
    let resultado = document.getElementById("resultado")
    resultado.innerText = Math.pow(valor,potencia)
    //2,3 = 2³ = 2*2*2 = 8
}
// ------------------------------------------------------


function raiz(){
    let raiz = document.getElementById("raiz")
    let resposta = document.getElementById("resposta")
    resposta.innerText = Math.sqrt(raiz)
}

// ------------------------------------------------------

//maior e menor
console.log(Math.max(5, 12, 9, 30 ,7))
console.log(Math.min(5, 12, 9, 30 ,7))
console.log(Math.round (Math.random()* 10))

//1 a 10
console.log(Math.floor(Math.random()*10)+1)
