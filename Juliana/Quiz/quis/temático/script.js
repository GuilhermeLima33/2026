let perguntas = [
{
    Image: "img/151125-hero-carlos-prates-hero-getty-images.avif",
    pergunta: "Carlos Prates é conhecido por qual característica marcante no UFC?",
    respostas: ["Finalizações rápidas", "Nocautes precisos",
        "Wrestling defensivo", "Chutes baixos"],
        correta: 1
},
{
    Image: "img/pergunta2.webp",
    pergunta: "Qual categoria Alex Poatan domina atualmente como campeão?",
    respostas: ["Peso-Médio (84 kg)", "Peso-Pesado (120 kg)", "Peso-Meio-Pesado (93 kg)", "Peso-Pena"],
    correta: 2
},
{
    Image: "img/pergunta3.jpg",
    pergunta: "O que aconteceu no 1º round de Charles Oliveira vs Michael Chandler?",
    respostas: ["Charles foi finalizado", "Charles sofreu knockdown","A luta foi empate", "Charles foi nocauteado"],
    correta: 1 
},
{
    Image: "img/pergunta4.jpg",
    pergunta: "Qual é o apelido de Ilia Topuria, atual campeão peso-pena?",
    respostas: ["The Great", "El Matador","The Sniper", "The Chosen One"],
    correta: 1 
},
{
    Image: "img/pergunta5.webp",
    pergunta: "Quem detém o recorde de maior número de bônus na história do UFC?",
    respostas: ["Jon Jones", "Conor McGregor","Charles Oliveira", "Anderson Silva"],
    correta: 2
},
{
    Image: "img/pergunta6.webp",
    pergunta: "Antes do MMA, Alex Poatan foi campeão duplo de qual organização de Kickboxing?",
    respostas: ["K-1", "Glory","Bellator", "One FC"],
    correta: 1
},
{
    Image: "img/pergunta7.webp",
    pergunta: "Carlos Prates faz parte de qual equipe que vem ganhando destaque no UFC?",
    respostas: ["Chute Boxe", "Fighting Nerds","Nova União", "ATT (American Top Team)"],
    correta: 1
},
{
    Image: "img/pergunta8.avif",
    pergunta: "Ilia Topuria representa quais nações no octógono?",
    respostas: ["Espanha e Geórgia", "Espanha e México","Alemanha e Rússia", "Geórgia e EUA"],
    correta: 0
},
{
    Image: "img/pergunta9.webp",
    pergunta: "Charles Oliveira detém o recorde histórico do UFC de qual tipo de vitória?",
    respostas: ["Nocautes", "Decisões dos juízes","Finalizações", "Lutas mais longas"],
    correta: 2
},
{
    Image: "img/pergunta10.jpg",
    pergunta: "Qual lutador Alex Poatan nocauteou no UFC 300 para defender seu cinturão?",
    respostas: ["Israel Adesanya", "Jamahal Hill","Jiri Prochazka", "Jan Blachowicz"],
    correta: 1
}
]
//Variáveis de controle
let perguntaAtual = 0
//Qual pergunta ta sendo exibida
//Começa na posição 0 // Primeira pergunta
let pontuacao = 0 //Quantas respostas certas

function mostrarPergunta (){
    let pergunta = perguntas[perguntaAtual]
    //pega a pergunta atual dentro do array

    document.getElementById("pergunta").innerText = pergunta.pergunta
    document.getElementById("image").src = pergunta.Image

    let respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = ""

    let resultado = document.getElementById("resultado")
    resultado.innerText = ""
    resultado.className = ""

    pergunta.respostas.forEach(function(resposta, index){
        const botao = document.createElement("button")
        botao.className = "botaoOpcao"
        botao.textContent = resposta
        botao.addEventListener("click", function(){
            verificarResposta(index)
        })
        respostasDiv.appendChild(botao)
    })
}

function verificarResposta (index){
    let pergunta = perguntas[perguntaAtual]
    let resultado = document.getElementById("resultado")
    resultado.className = "resultado-box"

    if(index == pergunta.correta){
        resultado.innerText = "Acertou!"
        resultado.classList.add("resultado-acerto")
        resultado.classList.remove("resultado-erro")
        pontuacao++
    } else {
        resultado.innerText = "Errou!"
        resultado.classList.add("resultado-erro")
        resultado.classList.remove("resultado-acerto")
    }
}

function proximaPergunta (){
perguntaAtual++
if (perguntaAtual < perguntas.length){
    mostrarPergunta()
    document.getElementById ("resultado").innerText = ""
}else{
    mostrarResultadoFinal()
}
}
function mostrarResultadoFinal (){
    const total = perguntas.length
    const titulo = pontuacao === total ? "Perfeito! Você acertou tudo!" : "Quiz finalizado"
    const mensagem = pontuacao === total
        ? "Pontuação máxima! Você conhece muito bem o UFC."
        : `Você acertou ${pontuacao} de ${total} perguntas. Continue treinando!`

    document.getElementById("container").innerHTML = `
    <div class="final-card">
        <h2>${titulo}</h2>
        <p class="legenda">Sua pontuação</p>
        <p class="pontuacao">${pontuacao} / ${total}</p>
        <p class="mensagem">${mensagem}</p>
        <button id="jogarNovamente" onclick="location.reload()">Jogar novamente</button>
    </div>
    `
}
mostrarPergunta()