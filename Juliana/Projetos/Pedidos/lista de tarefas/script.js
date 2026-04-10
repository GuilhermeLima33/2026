function adicionar(){
    let tarefa = document.getElementById("tarefa").value 
    let lista = document.getElementById("lista")
    let tarefaInput = document.getElementById("tarefa")

// avisar se a tarefa estiver vazia
    if(tarefa == ""){
        alert ("Digite uma tarefa")
        return
    }
    //Criar o <li>
let novoItem = document.createElement("li")
novoItem.innerText = tarefa

// adicionar o <li> no site
lista.appendChild(novoItem)
// Limpar o input
tarefaInput.value = ""
// apagar a tarefa
novoItem.onclick = function(){
lista.removeChild(novoItem)
}
}
