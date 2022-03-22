fetch("http://localhost:3000/ranking")
    .then((resposta) => {
        return resposta.json();
    })
        .then((json) => {
            console.log(json);
            const lista = document.querySelector("ul");
            json.forEach(element => {
                const novoItem = document.createElement("li");
                novoItem.textContent = element.nome + " -->  " + element.pontos;
                lista.appendChild(novoItem);
            });
        })