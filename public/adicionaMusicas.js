fetch("http://localhost:3000/pegar-lista")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        const lista = document.querySelector("#lista");
        lista.textContent = "";
        if (json.musicas.length > 0) {
            json.musicas.forEach(element => {
                let novoItem = document.createElement("li");
                novoItem.textContent = `${element.nome} da banda ${element.banda}`;
                lista.appendChild(novoItem);
            });
        } else {
            let mensagem = document.createElement("h3");
            mensagem.textContent = "A lista está vazia ;-;";
            lista.appendChild(mensagem);
        }
    });