fetch('http://localhost:3000').then(resposta => resposta.json()).then((json) =>{
    console.log(json);
});