function jogar(escolhaUsuario){
    let opcoes = ["pedra", "papel", "tesoura"]
    let escolhaComputador = opcoes[Math.floor(Math.random()*3)]

    let final = ""
    if(escolhaUsuario == escolhaComputador){
        final = "Empate"
    }else if (
    (escolhaUsuario == "pedra" && 
        escolhaComputador == "tesoura") ||
    (escolhaUsuario == "papel" &&
        escolhaComputador == "pedra") ||
    (escolhaUsuario == "tesoura" &&
        escolhaComputador == "papel")    
    ){
    final = "Jogador Ganhou"
    }else{
        final = "Computador Ganhou"
    }

    let resultado = document.getElementById("resultado")
    resultado.innerText = "Jogador: " + escolhaUsuario + " | Computador: "+
    escolhaComputador + " = " + final
}