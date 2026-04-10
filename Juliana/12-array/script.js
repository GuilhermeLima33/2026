let frutas = ["maçã", "Banana", "laranja"]

console.log(frutas) //todo array
console.log(frutas[0]) //maça
console.log(frutas[1])
console.log(frutas[2])
//medir
console.log(frutas.length)//contar quantos  quadrados tem
//length = tamanho
console.log(frutas[1].length)//quando especifica ele conta dentro (letra)
let nome = "Gui"
console.log(nome.length)//3

//Adicionar
//push = adiciona no final = fila
frutas.push("Uva")
frutas.push("Morango")
console.log(frutas)
//unshift = adiciona no começo = pilha
frutas.unshift("Abacaxi")
frutas.unshift("Manga")
console.log(frutas)

//remover
//pop = remove do final
frutas.pop()
console.log(frutas)
//shift = remove do inicio
frutas.shift()
console.log(frutas)

//splice = remove no meio
frutas.splice(1,1)//splice(posição, quantidade)
console.log(frutas)

//editar
frutas [2]= "Limão"
console.log(frutas)

//encontrar uma posição
console.log(frutas.indexOf("Abacaxi"))//0
console.log(frutas.indexOf("Limão"))//2
console.log(frutas.indexOf("Morango"))//-1

let amigos = ["Luana", "Rebeca", "Tatiane", "Felipe", "Ana"]
for(let i = 0; i < amigos.length; i++){
console.log(amigos[i])
}

for(let i = 0; i < amigos.length; i ++){
    if(amigos[i].length >= 6){
        console.log("O nome tem 6 letras ou mais")
    }else{

    }console.log("O nome tem 5 letras ou menos")
}

let alunos = []
for(let i = 0; i < 5; i ++){
alunos[i] = prompt("Qual o nome do aluno")
}
for (let i = 0; i < alunos.length; i ++){
    console.log(alunos[i])
}

let cor = ["preto","branco","amarelo","roxo"]
cor.push("laranja")
cor.push("Marrom")
cor.shift()

for(let i = 0;i < cor.length; i ++){
console.log(cor[i])
}

/*Crie um vetor vazio de 5 notas, peça para o usuário
 preencher usando for, depois em outro for mostre apenas
  as notas maiores que 7*/

  let vet = []
  for(let i = 0; i < 5; i ++){
  vet[i] = Number(prompt("Indique 5 notas:"))
  }
  for(let i = 0 ; i < vet.length; i ++){
    if(vet[i] > 7){
    console.log(vet[i])
    }
  }
