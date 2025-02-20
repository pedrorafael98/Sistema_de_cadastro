require('dotenv').config({path: 'C:/Users/pedroarruda/Documents/GitHub/Sistema_de_cadastro/.env'});
const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
// Configurações básicas
app.use(express.json()); // Permite JSON no body das requisições
app.use(cors()); // Habilita CORS para evitar erros em requisições externas
app.use(helmet()); // Aplica segurança nas respostas HTTP
app.use(morgan('dev')); // Log das requisições no console

const PORT = process.env.PORTA
const ROTA = process.env.ROTA_CRIAR_CONT

app.get('/', (req, res) => {
    res.json({menssage:"Servidor rodando!"});
})
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}!`)
    
    
})
app.post(ROTA, (req, res)=>{
    const{nome,
          matricula,
          cpf,
          senha} = req.body
    criandoConta(nome, matricula, cpf, senha)
    axios
    
})

async function criandoConta(nome, matricula, cpf, senha) {
    const dados = {"nome": nome, "matricula": matricula, "cpf": cpf, "senha": senha}
    if(vazio(nome) && vazio(matricula) && vazio(cpf) && vazio(senha)){
        if(semCaracteres(nome)){
            res.json("Nome não pode conter caracteres especiais!")
        }else{
            if(senha.length >= 5){
                await axios.post('http://localhost:8080/api/dados', dados)
                .then(response => console.log(response.data))
                .catch(erro=> console.error("Erro: ",erro));
            }else{
                res.JSON("Senha deve conter 5 ou mais caracteres!")
            }
        }
        
    }else{
        res.json("Nome, matricula, cpf e senha, são campos de preenchimento obrigatorio!")
    }
}
function vazio(vORc){
    const newTeste = [...new Set(vORc.split(''))] 
  
    if(newTeste == " "){
        return false
    }else{
        return true
    }
} 
function semCaracteres(str){
        const regex = /[^a-zA-Z ]/;
    
        return regex.test(str);
}