import express from "express";


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/tarefa/:materia/:dificuldade", function(req, res){
    res.send("A sua materia eh "+ req.params.materia +"<br>E a dificuldade dela eh "+req.params.dificuldade);
});

app.get("/bolo", function(req, res){
    res.send("Deu certo +_+");
});



app.listen(port, function(){
    console.log("Servidor rodando em http://localhost:" + port);
});