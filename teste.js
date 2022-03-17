import express from "express";

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/vamos', (req, res) => {
    res.send('Vamos lá');
});

const travel = [
    {banho: "toalha", secar: "sabonete"},
    {comer: "frutas", beber: "água"},
];

app.get('/bora', (req, res) =>{
    res.send(travel[1]);
});

app.listen(port, () => {
    console.log('Vivendo em http://localhost:' + port);
});
