function arredondar(){
 let  texto = document.getElementById("texto").value 
 let resultado = document.getElementById("resultado")

 resultado.innerText = "O resultado é: " + Math.round(texto) 
}

// -----------------------------------------------------------

function arredondarbaixo(){
let inputbaixo = document.getElementById("inputbaixo").value
let result = document.getElementById("result")
result.innerText = "O resultado é: " + Math.floor(inputbaixo)
}
// ------------------------------------------------------------

function arredondarcima(){
let icima = document.getElementById("icima").value
let resultadocima =document.getElementById("resultadocima")
resultadocima.innerText = "O resultado é: " + Math.ceil(icima)
}

// -------------------------------------------------------------
function raizquadrada (){
let iquadrada = document.getElementById("iquadrada").value
let resultadoquadrada = document.getElementById("resultadoquadrada")
resultadoquadrada.innerText = "O resultado é: " + Math.sqrt(iquadrada)
}

// -----------------------------------------------------------

function potencia(){
let ipotencia = document.getElementById("ipotencia").value
let ipotenciadois = document.getElementById("ipotenciadois").value
let resultpotencia = document.getElementById("resultpotencia")
resultpotencia.innerText = "O resultado é: "+ Math.pow(ipotencia, ipotenciadois)
}

// --------------------------------------------------------

function maiornumero(){
let imaiorum = document.getElementById("imaiorum").value
let imaiordois = document.getElementById("imaiordois").value
let imaiortres = document.getElementById("imaiortres").value
let resultmaior = document.getElementById("resultmaior")
resultmaior.innerText = "O resultado é: " + Math.max(imaiorum, imaiordois, imaiortres)
}

// --------------------------------------------------------

function menornumero(){
let imenorum = document.getElementById("imenorum").value
let imenordois = document.getElementById("imenordois").value
let imenortres = document.getElementById("imenortres").value
let resultmenor = document.getElementById("resultmenor")
resultmenor.innerText = "O resultado é: " + Math.min(imenordois,imenortres, imenorum)
}

// --------------------------------------------------------

function sortearnumero(){
let res = document.getElementById("res")
res.innerText = "O resultado é: " + Math.round(Math.random()*10)
}

// --------------------------------------------------------

function simulardado(){
let resp = document.getElementById("resp")
resp.innerText = "O resultado é: " + Math.round(Math.random()*5 + 1)
}