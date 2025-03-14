//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let valor = input.value.trim();

    if (valor) { 
        listaAmigos.push(valor);
        input.value = ""; 
        atualizarLista(); 
    } else {
        alert("Digite um nome válido!");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um nome.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    document.getElementById("resultado").textContent = `Amigo secreto sorteado é: ${amigoSorteado}`;
}
