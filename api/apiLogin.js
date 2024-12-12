const express = require('express');
const app = express();
const porta = 2000; 

app.listen(porta, ()=>{
    console.log('Servidor rodando!')
})
app.post('/login', (req, res) =>{
    const {cpf, senha} = req.body;
    const deuCerto = 'liberado';
    res.json(deuCerto);
})


