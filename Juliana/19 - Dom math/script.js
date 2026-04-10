//math 
let numero = 4.2


//arredondar o número
console.log(Math.round(numero))
// round -> arredondar para o mais próximo
console.log(Math.ceil(numero))
//ceil-> sempre arredonda pra cima
console.log(Math.floor(numero))
//floor-> arredonda para baixo

console.log("------------------------------------------------------")
//Raiz quadrada
console.log(Math.sqrt(25)) //5
console.log(Math.sqrt(81)) //9
console.log(Math.sqrt(100)) //10
//Sqrt -> Raiz quadrada

console.log("-----------------------------------")
//Maximo e minimo
console.log(Math.max(10,5,3,8,12)) //12
console.log(Math.min(10, 5,3,8,12)) //3
console.log("-----------------------------------")
//potencia
//2³
console.log(Math.pow(2,3)) // 2³ -> 8
console.log(Math.pow(57, 6)) // 57^^6
console.log("-----------------------------------")

//número aleatorio entre 0 e 1, nunca 0 e nem 1
console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.round(Math.random()* 10))