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
        
    
})

async function criandoConta(nome, matricula, cpf, senha) {
    if(vazio(nome) && vazio(matricula) && vazio(cpf) && vazio(senha)){
        if(semCaracteres(nome)){
            res.json("Nome não pode conter caracteres especiais!")
        }else{
            if(senha.length >= 5){
                await fetch('http://localhost:8080/echo', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        nome,
                        matricula,
                        cpf,
                        senha  
                    })
                })
                .then(re => re.json())
                .catch(err => {
                    console.log(err)
                })
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