fetch("http://localhost:3000/get-musica")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        const lista = document.querySelector("#lista");
        let pesquisa = document.querySelector("#pesquisa");

        let array_musica = json.somusica;

        console.log(array_musica);
        let t, r;

        t = ' ';

        for (i in array_musica) {
            array_musica[i] = array_musica[i].toLowerCase();
        }

        pesquisa.onkeydown = function() {
            t = this.value;
            r = new RegExp(t, "g");

            for (i in array_musica) {
                if (array_musica[i].match(r)) {
                    lista.children[i].removeAttribute("style");
                } else {
                    lista.children[i].style.display = "none";
                };
            };
        };

    });