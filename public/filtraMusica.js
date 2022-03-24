fetch("http://localhost:3000/pegar-musica")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        const lista = document.querySelector("#lista2");
        lista.textContent = "";
        if (json.somusica.length > 0) {
            json.somusica.forEach(element => {
                let novoItem = document.createElement("li");
                novoItem.textContent = `${nome}`;
                lista.appendChild(novoItem);
            });
        }

    });