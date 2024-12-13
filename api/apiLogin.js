const express = require('express');
const app = express();
const cors = require('cors');
const porta = 2000; 

app.use(express.json())
app.use(cors())
app.listen(porta, ()=>{
    console.log('Servidor rodando!')
})
app.post('/login', (req, res) =>{
    const {cpf, senha} = req.body;
    
     
    res.json.stringify({deuCerto:'liberado'});
})


