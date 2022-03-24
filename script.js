fetch("http://localhost:3000/ranking")
    .then((resposta) => {
        return resposta.json();
    })
        .then((json) => {
            const lista = document.querySelector('.separar');
            json.forEach((jogador) => {
                const novoItem = document.createElement('li');
                novoItem.textContent = jogador.artista + ' -->' + jogador.musica;
                lista.appendChild(novoItem);
            });
        });