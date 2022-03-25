import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 3000;

let lista = JSON.parse(fs.readFileSync("lista.json"));

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/enviar-musica", function(req, res) {
    let novaMusica = req.body;
    lista.musicas.push(novaMusica);


    let somusc = req.body.nome + req.body.banda;
    lista.somusica.push(somusc);

    fs.writeFileSync("lista.json", JSON.stringify(lista, null, 2), "utf-8");
    res.redirect("/");
});

app.get("/pegar-lista", (req, res) => {
    res.send(lista);
    console.log(lista);
});

app.get("/get-musica", (req, res) => {
    res.send(lista);
    console.log(lista.somusc);
});

// app.post("/votoss", function(req, res){

//    res.send("Nome: "+req.body.votacao + " Tipo: "+req.body.comida);

// });

// const ranking = [
//     {nome: "davi", pontos: 10 },
//     {nome: "ricardo", pontos: 0 },
//     {nome: "mathias", pontos: 50 },
//     {nome: "Lara", pontos: 100 },
// ]

// app.get("/ranking", function (req, res){
//     res.send(ranking);
// });

app.get("/listando.html", (req, res) => {
    res.sendFile(__dirname + "/listando.html");
});

app.get("/integrantes.html", (req, res) => {
    res.sendFile(__dirname + "/integrantes.html");
});

// app.get("/tarefa/:materia/:dificuldade", function(req, res) {
//     res.send("A sua materia eh " + req.params.materia + "<br>E a dificuldade dela eh " + req.params.dificuldade);
// });

// app.get("/inicio", function(req, res) {
//     res.send("Esta eh a página inicial...");
// });

app.listen(port, function() {
    console.log("Servidor rodando em http://localhost:" + port);
});