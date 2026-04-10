function saudacao (nome){
return "Bom dia" + nome
}
// let nome = prompt("Qual seu nome?")
// let aux = saudacao(nome)
// console.log(aux)
// console.log(saudacao(nome)) //assim também funciona

// let n1 = Number(prompt("Digite um número: "))
// let n2 = Number(prompt("Digite outro número: "))
// function soma(n1, n2){
// let resultado = n1 + n2
// return resultado
// //return n1+ n2 assim tbm funciona
// }
// let auxiliar = soma(n1,n2)
// console.log(auxiliar)

// let temperatura = Number(prompt("Qual a temperatura? "))
// let previsao = previsaoDoTempo(temperatura)
// console.log(previsao)
// function previsaoDoTempo (temperatura){
//     if(temperatura > 30){
//         return "Calor"
//     }else if (temperatura < 12){
//         return "Frio"
//     }else{
//         return "Ok"
//     }
// }


let salario = Number(prompt("Qual seu salário?"))
function empresa (salario){
if(salario < 2500){
let soma = salario + 500
return "Novo salário: " + soma
}else{
    return "Sem aumento"
}
}

let result = empresa(salario)
console.log(result)