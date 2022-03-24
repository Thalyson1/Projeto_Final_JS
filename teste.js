import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));





app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});




const ranking = [
    {artista: "ELO", musica: "Hold on Tigh" },
    {artista: "davi", musica: 10 },
    {artista: "davi", musica: 10 },
    {artista: "davi", musica: 10 },
];




app.use(cors());
app.use(express.static("public"));
app.get("/ranking", function (req, res){
    res.send(ranking);
});







app.listen(port, function(){
    console.log("Servidor rodando em http://localhost:" + port);
});