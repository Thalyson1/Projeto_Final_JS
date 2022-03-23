fetch('http://localhost:3000').then(resposta => resposta.json()).then((json) => {
    console.log(json);
});

let musica_input = document.querySelector("#musica");
let autor_input = document.querySelector("#autor");
let ano_input = document.querySelector("#ano");


let lista = document.querySelector("#flista");

let musicas = [];

let msc_output = [];

let tam_msc = [];

function mostrardados() {

    for (musica of musicas) {
        let eltarefa = document.createElement('li');
        let txttarefa = document.createTextNode(musica);

        eltarefa.appendChild(txttarefa);
        lista.appendChild(eltarefa);
    }

}

function adiciona() {
    msc_output.push(`Musica: ` + musica_input.value, `   Autor: ` + autor_input.value, `   Lançamento: ` + ano_input.value);

    musicas.push(musica_input.value + '');

    localStorage.setItem("valueText", msc_output);
    localStorage.setItem("musica", musicas);

    musica_input.value = '';
    autor_input.value = '';
    ano_input.value = '';

    console.log(musicas);

};



let btn = document.querySelector("#inputButton");


let btn2 = document.querySelector("#inputButton2");

function adiciona2() {
    paragrafo.innerHTML = '';
    var paragrafo = document.querySelector("#viewSessionSotorage");
    let item = document.createElement("li");
    let teste = localStorage.getItem('valueText');

    let texto = document.createTextNode(teste);

    item.appendChild(tex)



    tam_msc += localStorage.getItem("musica");

    console.log(tam_msc);

    mostrardados();
};