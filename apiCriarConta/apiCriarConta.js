require('dotenv').config({path: 'C:/Users/pedroarruda/Documents/GitHub/Sistema_de_cadastro/.env'});
const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
// Configurações básicas
app.use(express.json()); // Permite JSON no body das requisições
app.use(cors()); // Habilita CORS para evitar erros em requisições externas
app.use(helmet()); // Aplica segurança nas respostas HTTP
app.use(morgan('dev')); // Log das requisições no console

const PORT = process.env.PORTA

app.get('/', (req, res) => {
    res.json({menssage:"Servidor rodando!"});
})
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}!`)
    
})